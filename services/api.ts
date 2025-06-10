import axios from "axios";
export const apiClient = axios.create({
	baseURL: process.env.EXPO_PUBLIC_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});
apiClient.interceptors.request.use((config) => {
	config.headers.Authorization = `Bearer ${process.env.EXPO_PUBLIC_BEARER_TOKEN}`;
	return config;
});

export const getConditions = async () => {
	try {
		const { data, status } = await apiClient.get("/condition");
		return { data, status };
	} catch (error: any) {
		console.log(error);
		if (error.response) {
			console.log("Server responded with error", error.response.data);
		} else if (error.request) {
			console.log("No response received", error.request);
		} else {
			console.log("Axios error", error.message);
		}
	}
};

export const getWeightCategory = async () => {
	try {
		const { data, status } = await apiClient.get("/weight-category");
		return { data, status };
	} catch (error: any) {
		console.log(error);
		if (error.response) {
			console.log("Server responded with error", error.response.data);
		} else if (error.request) {
			console.log("No response received", error.request);
		} else {
			console.log("Axios error", error.message);
		}
	}
};
export const getAgeCategory = async () => {
	try {
		const { data, status } = await apiClient.get("/age-category");
		return { data, status };
	} catch (error: any) {
		console.log(error);
		if (error.response) {
			console.log("Server responded with error", error.response.data);
		} else if (error.request) {
			console.log("No response received", error.request);
		} else {
			console.log("Axios error", error.message);
		}
	}
};
export const getMedications = async () => {
	try {
		const { data, status } = await apiClient.get("/medication");
		return { data, status };
	} catch (error: any) {
		console.log(error);
		if (error.response) {
			console.log("Server responded with error", error.response.data);
		} else if (error.request) {
			console.log("No response received", error.request);
		} else {
			console.log("Axios error", error.message);
		}
	}
};
export const getDrugInteractions = async () => {
	try {
		const { data, status } = await apiClient.get("/condition");
		return { data, status };
	} catch (error: any) {
		console.log(error);
		if (error.response) {
			console.log("Server responded with error", error.response.data);
		} else if (error.request) {
			console.log("No response received", error.request);
		} else {
			console.log("Axios error", error.message);
		}
	}
};
export const getLifestyle = async () => {
	try {
		const { data, status } = await apiClient.get("/lifestyle");
		return { data, status };
	} catch (error: any) {
		console.log(error);
		if (error.response) {
			console.log("Server responded with error", error.response.data);
		} else if (error.request) {
			console.log("No response received", error.request);
		} else {
			console.log("Axios error", error.message);
		}
	}
};
export const verifyPrescription = async (data: any) => {
	const res = await apiClient.post("/check-prescription", data);
	return res.data;
};
