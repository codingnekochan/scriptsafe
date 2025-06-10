import * as SQLite from "expo-sqlite";

// Simplified Medical Records Database Manager
class prescriptionDB {
  constructor() {
    this.db = null;
    this.initialized = false;
  }

  // Initialize/Create database
  async initDatabase() {
    if (this.initialized) return;

    try {
      // Use the correct expo-sqlite API
      this.db = await SQLite.openDatabaseAsync("simple_medical_records.db");
      await this.createTables();
      this.initialized = true;
      console.log(
        "Simplified medical records database initialized successfully"
      );
    } catch (error) {
      console.error("Database initialization error:", error);
      throw error;
    }
  }

  // Ensure database is initialized before any operation
  async ensureInitialized() {
    if (!this.initialized) {
      await this.initDatabase();
    }
  }

  // Create single table for all patient data
  async createTables() {
    const createPatientsTable = `
      CREATE TABLE IF NOT EXISTS patients (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        date_created DATETIME DEFAULT CURRENT_TIMESTAMP,
        conditions TEXT NOT NULL,
        medications TEXT NOT NULL
      );
    `;

    try {
      await this.db.execAsync(createPatientsTable);
      console.log("Patients table created successfully");
    } catch (error) {
      console.error("Error creating table:", error);
      throw error;
    }
  }

  // Add new patient with conditions and medications as JSON strings
  async addPatient(data) {
    await this.ensureInitialized();

    const insertQuery = `
      INSERT INTO patients (name, conditions, medications) 
      VALUES (?, ?, ?);
    `;

    try {
      // Convert arrays to JSON strings
      const conditionsJson = JSON.stringify(data.conditions);
      const medicationsJson = JSON.stringify(data.medications);

      const result = await this.db.runAsync(insertQuery, [
        data.name,
        conditionsJson,
        medicationsJson,
      ]);
      console.log("Patient added with ID:", result.lastInsertRowId);
      return result.lastInsertRowId;
    } catch (error) {
      console.error("Error adding patient:", error);
      throw error;
    }
  }

  // Get all patients with parsed data
  async getAllPatients() {
    await this.ensureInitialized();

    const selectQuery = "SELECT * FROM patients ORDER BY date_created DESC;";

    try {
      const rawResults = await this.db.getAllAsync(selectQuery);

      // Parse JSON strings back to objects
      const parsedResults = rawResults.map((patient) => ({
        ...patient,
        conditions: this.safeJsonParse(patient.conditions),
        medications: this.safeJsonParse(patient.medications),
      }));

      console.log("Retrieved patients:", parsedResults);
      return parsedResults;
    } catch (error) {
      console.error("Error getting all patients:", error);
      throw error;
    }
  }

  // Helper function to safely parse JSON
  safeJsonParse(jsonString) {
    try {
      if (typeof jsonString === "string") {
        return JSON.parse(jsonString);
      }
      return jsonString;
    } catch (error) {
      console.error(error);
      console.warn("Failed to parse JSON:", jsonString);
      return jsonString; // Return original string if parsing fails
    }
  }
}

export const recentDB = new prescriptionDB();
