import FileIcon from "@/components/Icons/FileIcon"
import { NotificationIconVariant } from "@/components/Icons/NotificationIcons"
import RegisterIcon from "@/components/Icons/RegisterIcon"
import moment from 'moment'

export const homeContent = [
    {
        id: 'register',
        text: 'Register your pharmacy',
        subtext: 'Start receiving alerts and inventory updates tailored to your store.',
        icon: RegisterIcon,

    },
    {
        id: 'inventory',
        text: 'Add Inventory',
        subtext: 'Keep track of what you have, what’s running low, and what needs restocking.',
        icon: FileIcon,
    },
    {
        id: 'notifications',
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
        rating: 'safe'

    },
    {
        created_at: moment(),
        patient_name: 'Babatunde Aribatise',
        patient_illness: 'Malaria or UTI Treatment',
        patient_medication: 'Amoxicillin 500mg, Paracetamol 500mg',
        rating: 'safe'

    },
    {
        created_at: moment(),
        patient_name: 'Babatunde Aribatise',
        patient_illness: 'Malaria or UTI Treatment',
        patient_medication: 'Amoxicillin 500mg, Paracetamol 500mg',
        rating: 'unsafe'

    },
    {
        created_at: moment(),
        patient_name: 'Babatunde Aribatise',
        patient_illness: 'Malaria or UTI Treatment',
        patient_medication: 'Amoxicillin 500mg, Paracetamol 500mg',
        rating: 'safe'

    },
    {
        created_at: moment(),
        patient_name: 'Babatunde Aribatise',
        patient_illness: 'Malaria or UTI Treatment',
        patient_medication: 'Amoxicillin 500mg, Paracetamol 500mg',
        rating: 'caution'

    },
    {
        created_at: moment(),
        patient_name: 'Babatunde Aribatise',
        patient_illness: 'Malaria or UTI Treatment',
        patient_medication: 'Amoxicillin 500mg, Paracetamol 500mg',
        rating: 'safe'

    },

]
export const pregnancyOptions = [
    {
        id: 1,
        label: 'Pregnant',
        value: true
    },
    {
        id: 2,
        label: 'Not Pregnant',
        value: false
    }
]
export const genderOptions = [
    {
        id: 1,
        name: 'Male',
    },
    {
        id: 2,
        name: 'Female',
    }
]
 export const comorboditiesOption = [
    {
        id: 1,
        label: 'Yes',
        value: 'yes'
    },
    {
        id: 2,
        label: 'No',
        value: 'no'
    }
 ]
export const drugFreqency = [
    {
        id: 1,
        name: '1x/day',
    },
    {
        id: 2,
        name: '2x/day',
    },
    {
        id: 3,
        name: '3x/day',
    },
    {
        id: 4,
        name: '4x/day',
    }
]
export const drugDuration = [
    {
        id: 1,
        name: '1',
    },
    {
        id: 2,
        name: '2',
    },
    {
        id: 3,
        name: '3',
    },
    {
        id: 4,
        name: '4',
    },
     {
        id: 5,
        name: '5',
    }
]