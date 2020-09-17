interface DataElementData {
    name?: string;
    totalName?: string;
    info?: string;
}

interface OptionComboData {
    name?: string;
    info?: string;
    order?: number;
}

interface CustomFormData {
    dataElements: Record<string, DataElementData>;
    optionCombos: Record<string, OptionComboData>;
}

export const customFormData: CustomFormData = {
    dataElements: {
        "iS0UvvMJfBZ": { totalName: "Total reported cases" },
        "c1ks4x7JXL3": { totalName: "Total reported cases" },
        "eBvR8u3Zhyn": { totalName: "Total reported cases" },
        "S0yO4CcyxGe": { totalName: "Total reported cases" },
        "UHsqNgf8rMR": { totalName: "Total reported deaths" },
        "SjTpTIWIQsf": { totalName: "Total reported deaths" },
        "RQvWJjDJ75W": { totalName: "Total reported deaths" },
        "jQL9yuvexE2": { totalName: "Total reported deaths" },
        "Itk86F1EvYW": { totalName: "Total reported disabilities" },
        "hgqaYbNBBji": { totalName: "Total reported disabilities" },
        "fMyJYssme2o": { totalName: "Total reported disabilities" },
        "GEQEMndn6Ns": { totalName: "Total reported disabilities" },
        "HMr5QpcSo4C": { totalName: "Number of WHO-recommended antivenom products" },
        "Z4csnaklzkN": { totalName: "Number of other antivenom products" },
        "bBEjzhEN4y9": {
            totalName: "Total procured vials (all products)",
            info: "We are asking for the number of WHO-recommended products available in the reporting area - e.g.: not the number of vials, the number of different products. WHO defines these as either monovalent (for one species) or as polyvalent (more than one species)"
        },
        "YxWD6KP10e2": { totalName: "Total number of vials of other products" },
        "hLjVtUZKE6P": { totalName: "Total number of vials \n of WHO-recommended products" },
    },
    optionCombos: {
        "Z2hvpF7mhh7": { name: "Total involving males", order: 1 },
        "V2LdgcGgFQt": { name: "Total involving females", order: 2 },
        "jNbFhhnUsQv": { name: "Total where sex not recorded", order: 3 },
        "w4msAvzEdxS": { name: "Unknown population landscape" },
        "rJdblRiSIO5": { order: 1, info: '"Clinical diagnosis": the number of cases where the attribution of "snakebite envenoming" is based on clinical examination and a determination that signs and symptoms are consistent with this diagnosis.' },
        "R4MoCmzHuJd": { order: 2, info: '"Laboratory diagnosis": the number of cases where the  laboratory test results were used to help determine a diagnosis of snakebite envenoming' },
        "a14nFkqYZ9i": { order: 3, info: '"Unknown diagnosis": cases where snakebite envenoming is listed as the diagnosis without any additional information.' },
        "ZcIRFBDNEgJ": { order: 1 },
        "btZqlaByU1i": { order: 2 },
        "sWWzGtOIAc2": { order: 3 },
        "MBcxsuUpEKw": { order: 4 },
        "wqHO3LA1eKH": { order: 5 },
        "vtFBssX7BTG": { order: 6 },

    }
}