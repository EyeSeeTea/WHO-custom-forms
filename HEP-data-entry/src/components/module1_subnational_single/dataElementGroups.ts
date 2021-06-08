export interface DataElementGroup {
    order: string;
    readOnly?: boolean;
    inputNumeric: CustomDataElement;
}

export interface CustomDataElement {
    id: string;
    displayName: string;
    type?: "text" | "checkbox" | "text-area";
}

export const dataElementGroups: DataElementGroup[] = [
    {
        order: "1",
        readOnly: true,
        inputNumeric: {
            id: "qcDKkL7Xkl4-Xr12mI7VPn3-val",
            displayName: "Medical Doctors",
        },
    },
    {
        order: "1.1",
        inputNumeric: {
            id: "mHFT8rZ6ksz-Xr12mI7VPn3-val",
            displayName: "General Medical Practitioners",
        },
    },
    {
        order: "1.2",
        inputNumeric: {
            id: "qMdjQN91JDi-Xr12mI7VPn3-val",
            displayName: "Specialist Medical Practitioners",
        },
    },
    {
        order: "1.3",
        inputNumeric: {
            id: "ePgUyGHxJuI-Xr12mI7VPn3-val",
            displayName: "Medical doctors not further defined",
        },
    },
    {
        order: "2",
        readOnly: true,
        inputNumeric: {
            id: "ok6yvzSABcU-Xr12mI7VPn3-val",
            displayName: "Nursing Personnel",
        },
    },
    {
        order: "2.1",
        inputNumeric: {
            id: "Rnuo4SphAdV-Xr12mI7VPn3-val",
            displayName: "Nursing Professionals",
        },
    },
    {
        order: "2.2",
        inputNumeric: {
            id: "mHD3Efts57E-Xr12mI7VPn3-val",
            displayName: "Nursing Associate Professionals",
        },
    },
    {
        order: "2.3",
        inputNumeric: {
            id: "T58TEnz6WgZ-Xr12mI7VPn3-val",
            displayName: "Nurses not further defined",
        },
    },
    {
        order: "3",
        readOnly: true,
        inputNumeric: {
            id: "bDQt7HaZCu9-Xr12mI7VPn3-val",
            displayName: "Midwifery personnel",
        },
    },
    {
        order: "3.1",
        inputNumeric: {
            id: "EqDGfdOIX9a-Xr12mI7VPn3-val",
            displayName: "Midwifery Professionals",
        },
    },
    {
        order: "3.2",
        inputNumeric: {
            id: "rfqaKzMPEdf-Xr12mI7VPn3-val",
            displayName: "Midwifery Associate Professionals",
        },
    },
    {
        order: "3.3",
        inputNumeric: {
            id: "QC2yRZy5Fn7-Xr12mI7VPn3-val",
            displayName: "Midwives not further defined",
        },
    },
    {
        order: "4",
        inputNumeric: {
            id: "B6boWAxO6T4-Xr12mI7VPn3-val",
            displayName: "Dentists",
        },
    },
    {
        order: "5",
        inputNumeric: {
            id: "lHfsZY4fyv4-Xr12mI7VPn3-val",
            displayName: "Pharmacists",
        },
    },
];

export const correctOrgUnitNameDE = {
    id: "ZUCnSGgjlrw-Xr12mI7VPn3-val",
    displayName: "Correct organisation unit name",
    type: "text",
};

export const commentDE = {
    id: "kiwzlhjDZG9-Xr12mI7VPn3-val",
    displayName:
        "If you have data on occupations and their source title, that are not listed above please provide below",
    type: "text-area",
};
