export interface DataElementGroup {
    order: string,
    readOnly?: boolean,
    inputNumeric: CustomDataElement,
    inputCheckboxes: CustomDataElement[],
}

export interface CustomDataElement {
    id: string,
    displayName: string
    type?: "text" | "checkbox" | "text-area"

}

export const dataElementGroups: DataElementGroup[] = [
    {
        order: '1',
        readOnly: true,
        inputNumeric: {
            id: 'qcDKkL7Xkl4-Xr12mI7VPn3-val',
            displayName: 'Medical Doctors'
        },
        inputCheckboxes: [
            {
                id: 'TVBVT6naFjQ-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'TVBVT6naFjQ-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'TVBVT6naFjQ-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'TVBVT6naFjQ-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'TVBVT6naFjQ-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'TVBVT6naFjQ-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'TVBVT6naFjQ-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'TVBVT6naFjQ-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'TVBVT6naFjQ-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'TVBVT6naFjQ-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'TVBVT6naFjQ-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'TVBVT6naFjQ-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'TVBVT6naFjQ-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '1.1',
        inputNumeric: {
            id: 'mHFT8rZ6ksz-Xr12mI7VPn3-val',
            displayName: 'General Medical Practitioners'
        },
        inputCheckboxes: [
            {
                id: 't8Oxv1y44wM-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 't8Oxv1y44wM-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 't8Oxv1y44wM-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 't8Oxv1y44wM-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 't8Oxv1y44wM-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 't8Oxv1y44wM-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 't8Oxv1y44wM-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 't8Oxv1y44wM-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 't8Oxv1y44wM-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 't8Oxv1y44wM-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 't8Oxv1y44wM-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 't8Oxv1y44wM-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 't8Oxv1y44wM-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '1.2',
        inputNumeric: {
            id: 'qMdjQN91JDi-Xr12mI7VPn3-val',
            displayName: 'Specialist Medical Practitioners'
        },
        inputCheckboxes: [
            {
                id: 'BhkUnrfLZ1F-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'BhkUnrfLZ1F-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'BhkUnrfLZ1F-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'BhkUnrfLZ1F-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'BhkUnrfLZ1F-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'BhkUnrfLZ1F-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'BhkUnrfLZ1F-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'BhkUnrfLZ1F-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'BhkUnrfLZ1F-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'BhkUnrfLZ1F-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'BhkUnrfLZ1F-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'BhkUnrfLZ1F-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'BhkUnrfLZ1F-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '1.3',
        inputNumeric: {
            id: 'ePgUyGHxJuI-Xr12mI7VPn3-val',
            displayName: 'Medical doctors not further defined'
        },
        inputCheckboxes: [
            {
                id: 'y8MA1BOZ3OO-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'y8MA1BOZ3OO-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'y8MA1BOZ3OO-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'y8MA1BOZ3OO-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'y8MA1BOZ3OO-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'y8MA1BOZ3OO-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'y8MA1BOZ3OO-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'y8MA1BOZ3OO-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'y8MA1BOZ3OO-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'y8MA1BOZ3OO-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'y8MA1BOZ3OO-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'y8MA1BOZ3OO-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'y8MA1BOZ3OO-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '2',
        readOnly: true,
        inputNumeric: {
            id: 'ok6yvzSABcU-Xr12mI7VPn3-val',
            displayName: 'Nursing Personnel'
        },
        inputCheckboxes: [
            {
                id: 'SV71PdZSkmd-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'SV71PdZSkmd-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'SV71PdZSkmd-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'SV71PdZSkmd-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'SV71PdZSkmd-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'SV71PdZSkmd-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'SV71PdZSkmd-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'SV71PdZSkmd-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'SV71PdZSkmd-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'SV71PdZSkmd-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'SV71PdZSkmd-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'SV71PdZSkmd-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'SV71PdZSkmd-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '2.1',
        inputNumeric: {
            id: 'Rnuo4SphAdV-Xr12mI7VPn3-val',
            displayName: 'Nursing Professionals'
        },
        inputCheckboxes: [
            {
                id: 'TdwikGCtQ2F-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'TdwikGCtQ2F-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'TdwikGCtQ2F-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'TdwikGCtQ2F-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'TdwikGCtQ2F-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'TdwikGCtQ2F-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'TdwikGCtQ2F-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'TdwikGCtQ2F-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'TdwikGCtQ2F-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'TdwikGCtQ2F-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'TdwikGCtQ2F-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'TdwikGCtQ2F-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'TdwikGCtQ2F-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '2.2',
        inputNumeric: {
            id: 'mHD3Efts57E-Xr12mI7VPn3-val',
            displayName: 'Nursing Associate Professionals'
        },
        inputCheckboxes: [
            {
                id: 'WGJxTIBFQK2-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'WGJxTIBFQK2-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'WGJxTIBFQK2-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'WGJxTIBFQK2-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'WGJxTIBFQK2-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'WGJxTIBFQK2-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'WGJxTIBFQK2-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'WGJxTIBFQK2-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'WGJxTIBFQK2-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'WGJxTIBFQK2-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'WGJxTIBFQK2-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'WGJxTIBFQK2-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'WGJxTIBFQK2-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '2.3',
        inputNumeric: {
            id: 'T58TEnz6WgZ-Xr12mI7VPn3-val',
            displayName: 'Nurses not further defined'
        },
        inputCheckboxes: [
            {
                id: 'OgG8wQ6Zajq-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'OgG8wQ6Zajq-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'OgG8wQ6Zajq-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'OgG8wQ6Zajq-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'OgG8wQ6Zajq-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'OgG8wQ6Zajq-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'OgG8wQ6Zajq-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'OgG8wQ6Zajq-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'OgG8wQ6Zajq-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'OgG8wQ6Zajq-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'OgG8wQ6Zajq-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'OgG8wQ6Zajq-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'OgG8wQ6Zajq-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '3',
        readOnly: true,
        inputNumeric: {
            id: 'bDQt7HaZCu9-Xr12mI7VPn3-val',
            displayName: 'Midwifery personnel'
        },
        inputCheckboxes: [
            {
                id: 'V8OUvPiHabT-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'V8OUvPiHabT-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'V8OUvPiHabT-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'V8OUvPiHabT-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'V8OUvPiHabT-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'V8OUvPiHabT-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'V8OUvPiHabT-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'V8OUvPiHabT-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'V8OUvPiHabT-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'V8OUvPiHabT-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'V8OUvPiHabT-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'V8OUvPiHabT-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'V8OUvPiHabT-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '3.1',
        inputNumeric: {
            id: 'EqDGfdOIX9a-Xr12mI7VPn3-val',
            displayName: 'Midwifery Professionals'
        },
        inputCheckboxes: [
            {
                id: 'RSMht6Qosgc-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'RSMht6Qosgc-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'RSMht6Qosgc-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'RSMht6Qosgc-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'RSMht6Qosgc-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'RSMht6Qosgc-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'RSMht6Qosgc-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'RSMht6Qosgc-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'RSMht6Qosgc-IhnQTXo2sCi-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'RSMht6Qosgc-xgbBSeyiDWp-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'RSMht6Qosgc-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'RSMht6Qosgc-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'RSMht6Qosgc-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '3.2',
        inputNumeric: {
            id: 'rfqaKzMPEdf-Xr12mI7VPn3-val',
            displayName: 'Midwifery Associate Professionals'
        },
        inputCheckboxes: [
            {
                id: 'oLW42C1cyO6-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'oLW42C1cyO6-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'oLW42C1cyO6-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'oLW42C1cyO6-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'oLW42C1cyO6-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'oLW42C1cyO6-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'oLW42C1cyO6-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'oLW42C1cyO6-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'oLW42C1cyO6-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'oLW42C1cyO6-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'oLW42C1cyO6-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'oLW42C1cyO6-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'oLW42C1cyO6-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '3.3',
        inputNumeric: {
            id: 'QC2yRZy5Fn7-Xr12mI7VPn3-val',
            displayName: 'Midwives not further defined'
        },
        inputCheckboxes: [
            {
                id: 'lJEqAtOXtsG-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'lJEqAtOXtsG-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'lJEqAtOXtsG-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'lJEqAtOXtsG-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'lJEqAtOXtsG-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'lJEqAtOXtsG-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'lJEqAtOXtsG-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'lJEqAtOXtsG-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'lJEqAtOXtsG-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'lJEqAtOXtsG-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'lJEqAtOXtsG-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'lJEqAtOXtsG-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'lJEqAtOXtsG-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '4',
        inputNumeric: {
            id: 'B6boWAxO6T4-Xr12mI7VPn3-val',
            displayName: 'Dentists'
        },
        inputCheckboxes: [
            {
                id: 'NHKS3IKZUm0-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'NHKS3IKZUm0-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'NHKS3IKZUm0-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'NHKS3IKZUm0-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'NHKS3IKZUm0-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'NHKS3IKZUm0-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'NHKS3IKZUm0-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'NHKS3IKZUm0-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'NHKS3IKZUm0-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'NHKS3IKZUm0-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'NHKS3IKZUm0-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'NHKS3IKZUm0-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'NHKS3IKZUm0-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '5',
        inputNumeric: {
            id: 'UPfQopzBdyx-Xr12mI7VPn3-val',
            displayName: 'Dental Assistants and Therapists'
        },
        inputCheckboxes: [
            {
                id: 'aGH9AIGSrvk-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'aGH9AIGSrvk-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'aGH9AIGSrvk-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'aGH9AIGSrvk-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'aGH9AIGSrvk-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'aGH9AIGSrvk-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'aGH9AIGSrvk-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'aGH9AIGSrvk-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'aGH9AIGSrvk-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'aGH9AIGSrvk-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'aGH9AIGSrvk-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'aGH9AIGSrvk-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'aGH9AIGSrvk-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    }
]

export const correctOrgUnitNameDE = {
    id: 'ZUCnSGgjlrw-Xr12mI7VPn3-val',
    displayName: 'Correct organisation unit name',
    type: "text"
};

export const commentDE = {
    id: 'kiwzlhjDZG9-Xr12mI7VPn3-val',
    displayName: 'If you have data on occupations and their source title, that are not listed above please provide below',
    type: "text-area"
};

