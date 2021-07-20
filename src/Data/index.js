export const initialData = {
    surveyName: "My Survey",
    currentPage: 1,
    page: [
        {
            id: 1,
            option: [],
            dropDownId: 1,
            question: "...",
            answer: "",
            required: true,
            description: "",
            image: "",
            layout: 1,
        }
    ]

}

export const DropDownData = [
    {
        id: 1,
        type: "MultipleChoice",
        icon: "CheckOutlined"
    },
    {
        id: 2,
        type: "Textbox",
        icon: "DashOutlined"
    },
    {
        id: 5,
        type: "Date",
        icon: "CalendarOutlined"
    },
    {
        id: 6,
        type: "Feedback",
        icon: "StarOutlined"
    },
    {
        id: 7,
        type: "Textarea",
        icon: "AlignCenterOutlined"
    },
    {
        id: 8,
        type: "Number",
        icon: "FieldNumberOutlined"
    },
    {
        id: 9,
        type: "Email",
        icon: "MailOutlined"
    },
    {
        id: 10,
        type: "Website",
        icon: "LinkOutlined"
    },
    {
        id: 11,
        type: "Phone",
        icon: "PhoneOutlined"
    },
    
]

export const LayoutData = [
    {
        id: 1,
        name: "layoutOne"
    },
    {
        id: 2,
        name: "layoutTwo"
    },
    {
        id: 3,
        name: "layoutThree"
    }
]

export const pageLayout = {
    id: 1,
    dropDownId: 1,
    question: "...",
    answer: "",
    required: true,
    image: "",
    layout: 1,
}