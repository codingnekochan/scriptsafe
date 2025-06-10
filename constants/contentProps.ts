import FileIcon from "@/components/Icons/FileIcon";
import { NotificationIconVariant } from "@/components/Icons/NotificationIcons";
import RegisterIcon from "@/components/Icons/RegisterIcon";
import moment from "moment";

export const homeContent = [
  {
    id: "register",
    text: "Register your pharmacy",
    subtext:
      "Start receiving alerts and inventory updates tailored to your store.",
    icon: RegisterIcon,
  },
  {
    id: "inventory",
    text: "Add Inventory",
    subtext:
      "Keep track of what you have, what’s running low, and what needs restocking.",
    icon: FileIcon,
  },
  {
    id: "notifications",
    text: "Set Up Notifications",
    subtext:
      "Never miss a critical update. Get notified the moment something changes.",
    icon: NotificationIconVariant,
  },
];
export const recentPrescriptions = [
  {
    created_at: moment(),
    patient_name: "Babatunde Aribatise",
    patient_illness: "Malaria or UTI Treatment",
    patient_medication: "Amoxicillin 500mg, Paracetamol 500mg",
    rating: "safe",
  },
  {
    created_at: moment(),
    patient_name: "Babatunde Aribatise",
    patient_illness: "Malaria or UTI Treatment",
    patient_medication: "Amoxicillin 500mg, Paracetamol 500mg",
    rating: "safe",
  },
  {
    created_at: moment(),
    patient_name: "Babatunde Aribatise",
    patient_illness: "Malaria or UTI Treatment",
    patient_medication: "Amoxicillin 500mg, Paracetamol 500mg",
    rating: "unsafe",
  },
  {
    created_at: moment(),
    patient_name: "Babatunde Aribatise",
    patient_illness: "Malaria or UTI Treatment",
    patient_medication: "Amoxicillin 500mg, Paracetamol 500mg",
    rating: "safe",
  },
  {
    created_at: moment(),
    patient_name: "Babatunde Aribatise",
    patient_illness: "Malaria or UTI Treatment",
    patient_medication: "Amoxicillin 500mg, Paracetamol 500mg",
    rating: "caution",
  },
  {
    created_at: moment(),
    patient_name: "Babatunde Aribatise",
    patient_illness: "Malaria or UTI Treatment",
    patient_medication: "Amoxicillin 500mg, Paracetamol 500mg",
    rating: "safe",
  },
];
export const pregnancyOptions = [
  {
    id: 1,
    label: "Pregnant",
    value: "Pregnant",
  },
  {
    id: 2,
    label: "Not Pregnant",
    value: "Not Pregnant",
  },
];
export const genderOptions = [
  {
    id: 1,
    name: "Male",
  },
  {
    id: 2,
    name: "Female",
  },
];
export const comorbiditiesOption = [
  {
    id: 1,
    label: "Yes",
    value: true,
  },
  {
    id: 2,
    label: "No",
    value: false,
  },
];

export const weightUnit = [
  { id: 1, label: "kg", value: "kg" },
  { id: 2, label: "g", value: "g" },
  { id: 3, label: "lbs", value: "lbs" },
];

export const frequencyUnit = [
  { id: 1, label: "x daily", value: "x daily" },
  { id: 2, label: "x weekly", value: "x weekly" },
  { id: 3, label: "x monthly", value: "x monthly" },
  { id: 4, label: "x yearly", value: "x yearly" },
  { id: 5, label: "times/day", value: "times/day" },
  { id: 6, label: "times/week", value: "times/week" },
  { id: 7, label: "times/month", value: "times/month" },
  { id: 8, label: "times/year", value: "times/year" },
];
export const durationUnit = [
  { id: 1, label: "Days", value: "Days" },
  { id: 2, label: "Weeks", value: "Weeks" },
  { id: 3, label: "Months", value: "Months" },
  { id: 4, label: "Years", value: "Years" },
];
export const dosageUnit = [
  { id: 1, label: "mcg", value: "mcg" },
  { id: 2, label: "mg", value: "mg" },
  { id: 3, label: "g", value: "g" },
  { id: 4, label: "ml", value: "ml" },
];
