import FileIcon from "@/components/Icons/FileIcon"
import { NotificationIconVariant } from "@/components/Icons/NotificationIcons"
import RegisterIcon from "@/components/Icons/RegisterIcon"
import moment from 'moment'

export const homeContent = [
    {
        text: 'Register your pharmacy',
        subtext: 'Start receiving alerts and inventory updates tailored to your store.',
        icon: RegisterIcon,

    },
    {
        text: 'Add Inventory',
        subtext: 'Keep track of what you have, what’s running low, and what needs restocking.',
        icon: FileIcon,
    },
    {
        text: 'Set Up Notifications',
        subtext: "Never miss a critical update. Get notified the moment something changes.",
        icon: NotificationIconVariant,
    }
]
export const recentPrescriptions = [
    {
        created_at: moment(),
        patient_name: 'Babatunde Aribatise',
        patient_illness: 'Malaria or UTI Treatment',
        patient_medication: 'Amoxicillin 500mg, Paracetamol 500mg',
        safety: 'safe'

    },
    {
        created_at: moment(),
        patient_name: 'Babatunde Aribatise',
        patient_illness: 'Malaria or UTI Treatment',
        patient_medication: 'Amoxicillin 500mg, Paracetamol 500mg',
        safety: 'safe'

    },
    {
        created_at: moment(),
        patient_name: 'Babatunde Aribatise',
        patient_illness: 'Malaria or UTI Treatment',
        patient_medication: 'Amoxicillin 500mg, Paracetamol 500mg',
        safety: 'unsafe'

    },
    {
        created_at: moment(),
        patient_name: 'Babatunde Aribatise',
        patient_illness: 'Malaria or UTI Treatment',
        patient_medication: 'Amoxicillin 500mg, Paracetamol 500mg',
        safety: 'safe'

    },
    {
        created_at: moment(),
        patient_name: 'Babatunde Aribatise',
        patient_illness: 'Malaria or UTI Treatment',
        patient_medication: 'Amoxicillin 500mg, Paracetamol 500mg',
        safety: 'caution'

    },
    {
        created_at: moment(),
        patient_name: 'Babatunde Aribatise',
        patient_illness: 'Malaria or UTI Treatment',
        patient_medication: 'Amoxicillin 500mg, Paracetamol 500mg',
        safety: 'safe'

    },
]