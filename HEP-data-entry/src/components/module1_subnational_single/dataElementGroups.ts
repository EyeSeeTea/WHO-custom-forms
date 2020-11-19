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
        order: '1.2.1',
        inputNumeric: {
            id: 'TTMOwYLxC3K-Xr12mI7VPn3-val',
            displayName: 'General paediatricians'
        },
        inputCheckboxes: [
            {
                id: 'QTxtciKOpi4-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'QTxtciKOpi4-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'QTxtciKOpi4-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'QTxtciKOpi4-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'QTxtciKOpi4-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'QTxtciKOpi4-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'QTxtciKOpi4-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'QTxtciKOpi4-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'QTxtciKOpi4-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'QTxtciKOpi4-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'QTxtciKOpi4-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'QTxtciKOpi4-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'QTxtciKOpi4-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '1.2.2',
        inputNumeric: {
            id: 'P2IIjEqx3Ln-Xr12mI7VPn3-val',
            displayName: 'Obstetricians and Gynaecologists'
        },
        inputCheckboxes: [
            {
                id: 'GfZATdx6tyR-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'GfZATdx6tyR-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'GfZATdx6tyR-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'GfZATdx6tyR-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'GfZATdx6tyR-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'GfZATdx6tyR-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'GfZATdx6tyR-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'GfZATdx6tyR-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'GfZATdx6tyR-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'GfZATdx6tyR-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'GfZATdx6tyR-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'GfZATdx6tyR-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'GfZATdx6tyR-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '1.2.3',
        inputNumeric: {
            id: 'l9UT5O04oHe-Xr12mI7VPn3-val',
            displayName: 'Psychiatrists Practitioners'
        },
        inputCheckboxes: [
            {
                id: 'pLp6oO7Nz7q-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'pLp6oO7Nz7q-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'pLp6oO7Nz7q-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'pLp6oO7Nz7q-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'pLp6oO7Nz7q-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'pLp6oO7Nz7q-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'pLp6oO7Nz7q-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'pLp6oO7Nz7q-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'pLp6oO7Nz7q-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'pLp6oO7Nz7q-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'pLp6oO7Nz7q-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'pLp6oO7Nz7q-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'pLp6oO7Nz7q-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '1.2.4',
        inputNumeric: {
            id: 'Ak0hKFGvtdT-Xr12mI7VPn3-val',
            displayName: 'Medical group of Specialists Practitioners'
        },
        inputCheckboxes: [
            {
                id: 'ULKGjVBEVtV-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'ULKGjVBEVtV-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'ULKGjVBEVtV-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'ULKGjVBEVtV-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'ULKGjVBEVtV-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'ULKGjVBEVtV-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'ULKGjVBEVtV-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'ULKGjVBEVtV-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'ULKGjVBEVtV-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'ULKGjVBEVtV-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'ULKGjVBEVtV-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'ULKGjVBEVtV-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'ULKGjVBEVtV-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '1.2.5',
        inputNumeric: {
            id: 'mvxUYayh4r7-Xr12mI7VPn3-val',
            displayName: 'Surgical group of Specialists Practitioners'
        },
        inputCheckboxes: [
            {
                id: 'ivDFPAzvJRs-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'ivDFPAzvJRs-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'ivDFPAzvJRs-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'ivDFPAzvJRs-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'ivDFPAzvJRs-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'ivDFPAzvJRs-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'ivDFPAzvJRs-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'ivDFPAzvJRs-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'ivDFPAzvJRs-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'ivDFPAzvJRs-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'ivDFPAzvJRs-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'ivDFPAzvJRs-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'ivDFPAzvJRs-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '1.2.6',
        inputNumeric: {
            id: 'kxCwvwExOHq-Xr12mI7VPn3-val',
            displayName: 'Other Specialists Practitioners'
        },
        inputCheckboxes: [
            {
                id: 'aTMXJbKJthX-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'aTMXJbKJthX-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'aTMXJbKJthX-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'aTMXJbKJthX-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'aTMXJbKJthX-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'aTMXJbKJthX-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'aTMXJbKJthX-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'aTMXJbKJthX-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'aTMXJbKJthX-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'aTMXJbKJthX-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'aTMXJbKJthX-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'aTMXJbKJthX-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'aTMXJbKJthX-ADfCJWnnU2O-val',
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
    },
    {
        order: '6',
        inputNumeric: {
            id: 'f1tdQ6FNHl3-Xr12mI7VPn3-val',
            displayName: 'Dental Prosthetic Technicians'
        },
        inputCheckboxes: [
            {
                id: 'CSfXgrqyeWA-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'CSfXgrqyeWA-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'CSfXgrqyeWA-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'CSfXgrqyeWA-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'CSfXgrqyeWA-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'CSfXgrqyeWA-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'CSfXgrqyeWA-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'CSfXgrqyeWA-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'CSfXgrqyeWA-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'CSfXgrqyeWA-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'CSfXgrqyeWA-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'CSfXgrqyeWA-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'CSfXgrqyeWA-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '7',
        inputNumeric: {
            id: 'lHfsZY4fyv4-Xr12mI7VPn3-val',
            displayName: 'Pharmacists'
        },
        inputCheckboxes: [
            {
                id: 'zzqYlPsU5oh-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'zzqYlPsU5oh-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'zzqYlPsU5oh-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'zzqYlPsU5oh-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'zzqYlPsU5oh-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'zzqYlPsU5oh-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'zzqYlPsU5oh-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'zzqYlPsU5oh-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'zzqYlPsU5oh-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'zzqYlPsU5oh-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'zzqYlPsU5oh-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'zzqYlPsU5oh-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'zzqYlPsU5oh-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '8',
        inputNumeric: {
            id: 'kLVRrIrdx4o-Xr12mI7VPn3-val',
            displayName: 'Pharmaceutical Technicians'
        },
        inputCheckboxes: [
            {
                id: 'SWyR9i14Pxn-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'SWyR9i14Pxn-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'SWyR9i14Pxn-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'SWyR9i14Pxn-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'SWyR9i14Pxn-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'SWyR9i14Pxn-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'SWyR9i14Pxn-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'SWyR9i14Pxn-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'SWyR9i14Pxn-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'SWyR9i14Pxn-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'SWyR9i14Pxn-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'SWyR9i14Pxn-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'SWyR9i14Pxn-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '9',
        inputNumeric: {
            id: 'BFv7qbrVjSE-Xr12mI7VPn3-val',
            displayName: 'Paramedical Practitioners'
        },
        inputCheckboxes: [
            {
                id: 'NgX4KMh3Ijn-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'NgX4KMh3Ijn-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'NgX4KMh3Ijn-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'NgX4KMh3Ijn-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'NgX4KMh3Ijn-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'NgX4KMh3Ijn-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'NgX4KMh3Ijn-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'NgX4KMh3Ijn-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'NgX4KMh3Ijn-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'NgX4KMh3Ijn-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'NgX4KMh3Ijn-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'NgX4KMh3Ijn-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'NgX4KMh3Ijn-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '10',
        inputNumeric: {
            id: 'px0f38y2cYc-Xr12mI7VPn3-val',
            displayName: 'Medical and Pathology Laboratory scientists'
        },
        inputCheckboxes: [
            {
                id: 'zEvdz7LGHzP-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'zEvdz7LGHzP-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'zEvdz7LGHzP-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'zEvdz7LGHzP-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'zEvdz7LGHzP-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'zEvdz7LGHzP-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'zEvdz7LGHzP-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'zEvdz7LGHzP-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'zEvdz7LGHzP-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'zEvdz7LGHzP-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'zEvdz7LGHzP-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'zEvdz7LGHzP-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'zEvdz7LGHzP-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '11',
        inputNumeric: {
            id: 'JLZfYSnv7d0-Xr12mI7VPn3-val',
            displayName: 'Medical Imaging and Therapeutic Equipment Technicians'
        },
        inputCheckboxes: [
            {
                id: 'CMaEmSFStl9-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'CMaEmSFStl9-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'CMaEmSFStl9-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'CMaEmSFStl9-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'CMaEmSFStl9-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'CMaEmSFStl9-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'CMaEmSFStl9-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'CMaEmSFStl9-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'CMaEmSFStl9-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'CMaEmSFStl9-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'CMaEmSFStl9-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'CMaEmSFStl9-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'CMaEmSFStl9-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '12',
        inputNumeric: {
            id: 'hiJpLYx5O1M-Xr12mI7VPn3-val',
            displayName: 'Medical and Pathology Laboratory Technicians'
        },
        inputCheckboxes: [
            {
                id: 'EFe7oKmUuO2-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'EFe7oKmUuO2-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'EFe7oKmUuO2-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'EFe7oKmUuO2-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'EFe7oKmUuO2-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'EFe7oKmUuO2-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'EFe7oKmUuO2-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'EFe7oKmUuO2-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'EFe7oKmUuO2-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'EFe7oKmUuO2-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'EFe7oKmUuO2-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'EFe7oKmUuO2-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'EFe7oKmUuO2-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '13',
        inputNumeric: {
            id: 'KxFMQ4zRaPS-Xr12mI7VPn3-val',
            displayName: 'Environmental and Occupational Health Professionals'
        },
        inputCheckboxes: [
            {
                id: 'iqFs2UlQGBt-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'iqFs2UlQGBt-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'iqFs2UlQGBt-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'iqFs2UlQGBt-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'iqFs2UlQGBt-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'iqFs2UlQGBt-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'iqFs2UlQGBt-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'iqFs2UlQGBt-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'iqFs2UlQGBt-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'iqFs2UlQGBt-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'iqFs2UlQGBt-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'iqFs2UlQGBt-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'iqFs2UlQGBt-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '14',
        inputNumeric: {
            id: 'W24Nl5q4JeN-Xr12mI7VPn3-val',
            displayName: 'Environmental and Occupational Health Inspectors/associates'
        },
        inputCheckboxes: [
            {
                id: 'aeMjonuMtcc-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'aeMjonuMtcc-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'aeMjonuMtcc-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'aeMjonuMtcc-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'aeMjonuMtcc-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'aeMjonuMtcc-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'aeMjonuMtcc-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'aeMjonuMtcc-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'aeMjonuMtcc-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'aeMjonuMtcc-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'aeMjonuMtcc-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'aeMjonuMtcc-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'aeMjonuMtcc-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '15',
        inputNumeric: {
            id: 'ZF8DKPqU85S-Xr12mI7VPn3-val',
            displayName: 'Traditional and Complementary Medicine Professionals'
        },
        inputCheckboxes: [
            {
                id: 'eAYthjFSqFp-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'eAYthjFSqFp-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'eAYthjFSqFp-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'eAYthjFSqFp-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'eAYthjFSqFp-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'eAYthjFSqFp-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'eAYthjFSqFp-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'eAYthjFSqFp-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'eAYthjFSqFp-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'eAYthjFSqFp-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'eAYthjFSqFp-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'eAYthjFSqFp-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'eAYthjFSqFp-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '16',
        inputNumeric: {
            id: 'hzznMtRzS4K-Xr12mI7VPn3-val',
            displayName: 'Traditional and Complementary Medicine Associate Professionals'
        },
        inputCheckboxes: [
            {
                id: 'OdzBeCJucrN-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'OdzBeCJucrN-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'OdzBeCJucrN-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'OdzBeCJucrN-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'OdzBeCJucrN-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'OdzBeCJucrN-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'OdzBeCJucrN-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'OdzBeCJucrN-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'OdzBeCJucrN-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'OdzBeCJucrN-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'OdzBeCJucrN-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'OdzBeCJucrN-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'OdzBeCJucrN-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '17',
        inputNumeric: {
            id: 'i3wZesLV0nt-Xr12mI7VPn3-val',
            displayName: 'Community Health Workers'
        },
        inputCheckboxes: [
            {
                id: 'twyiCdF4gkw-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'twyiCdF4gkw-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'twyiCdF4gkw-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'twyiCdF4gkw-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'twyiCdF4gkw-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'twyiCdF4gkw-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'twyiCdF4gkw-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'twyiCdF4gkw-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'twyiCdF4gkw-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'twyiCdF4gkw-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'twyiCdF4gkw-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'twyiCdF4gkw-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'twyiCdF4gkw-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '18',
        inputNumeric: {
            id: 'QFPE2nUccBH-Xr12mI7VPn3-val',
            displayName: 'Personal care workers in health service'
        },
        inputCheckboxes: [
            {
                id: 'I68Gt1LWnKY-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'I68Gt1LWnKY-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'I68Gt1LWnKY-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'I68Gt1LWnKY-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'I68Gt1LWnKY-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'I68Gt1LWnKY-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'I68Gt1LWnKY-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'I68Gt1LWnKY-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'I68Gt1LWnKY-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'I68Gt1LWnKY-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'I68Gt1LWnKY-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'I68Gt1LWnKY-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'I68Gt1LWnKY-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '19',
        inputNumeric: {
            id: 'JUpiZAY6jKT-Xr12mI7VPn3-val',
            displayName: 'Health Care Assistants'
        },
        inputCheckboxes: [
            {
                id: 't91xdLaqfu2-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 't91xdLaqfu2-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 't91xdLaqfu2-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 't91xdLaqfu2-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 't91xdLaqfu2-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 't91xdLaqfu2-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 't91xdLaqfu2-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 't91xdLaqfu2-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 't91xdLaqfu2-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 't91xdLaqfu2-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 't91xdLaqfu2-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 't91xdLaqfu2-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 't91xdLaqfu2-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '20',
        inputNumeric: {
            id: 'c7TR3fxDRK8-Xr12mI7VPn3-val',
            displayName: 'Home-based Personal Care'
        },
        inputCheckboxes: [
            {
                id: 'uNhNf1HB1TH-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'uNhNf1HB1TH-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'uNhNf1HB1TH-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'uNhNf1HB1TH-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'uNhNf1HB1TH-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'uNhNf1HB1TH-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'uNhNf1HB1TH-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'uNhNf1HB1TH-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'uNhNf1HB1TH-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'uNhNf1HB1TH-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'uNhNf1HB1TH-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'uNhNf1HB1TH-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'uNhNf1HB1TH-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '21',
        inputNumeric: {
            id: 'NdKLrVnkH7Y-Xr12mI7VPn3-val',
            displayName: 'Personal care workers in health service n.e.c'
        },
        inputCheckboxes: [
            {
                id: 'B6byh3I2gLZ-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'B6byh3I2gLZ-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'B6byh3I2gLZ-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'B6byh3I2gLZ-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'B6byh3I2gLZ-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'B6byh3I2gLZ-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'B6byh3I2gLZ-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'B6byh3I2gLZ-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'B6byh3I2gLZ-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'B6byh3I2gLZ-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'B6byh3I2gLZ-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'B6byh3I2gLZ-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'B6byh3I2gLZ-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '22',
        inputNumeric: {
            id: 'izp60TKwy42-Xr12mI7VPn3-val',
            displayName: 'Physiotherapists'
        },
        inputCheckboxes: [
            {
                id: 'P32Zj6UH2Gp-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'P32Zj6UH2Gp-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'P32Zj6UH2Gp-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'P32Zj6UH2Gp-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'P32Zj6UH2Gp-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'P32Zj6UH2Gp-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'P32Zj6UH2Gp-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'P32Zj6UH2Gp-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'P32Zj6UH2Gp-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'P32Zj6UH2Gp-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'P32Zj6UH2Gp-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'P32Zj6UH2Gp-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'P32Zj6UH2Gp-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '23',
        inputNumeric: {
            id: 'QF1ITmMPR5G-Xr12mI7VPn3-val',
            displayName: 'Physiotherapy Technicians and Assistants'
        },
        inputCheckboxes: [
            {
                id: 'YatI9LfufnA-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'YatI9LfufnA-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'YatI9LfufnA-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'YatI9LfufnA-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'YatI9LfufnA-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'YatI9LfufnA-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'YatI9LfufnA-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'YatI9LfufnA-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'YatI9LfufnA-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'YatI9LfufnA-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'YatI9LfufnA-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'YatI9LfufnA-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'YatI9LfufnA-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '24',
        inputNumeric: {
            id: 'iv3ZPC0JsHh-Xr12mI7VPn3-val',
            displayName: 'Dieticians'
        },
        inputCheckboxes: [
            {
                id: 'zA03t1uZJVd-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'zA03t1uZJVd-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'zA03t1uZJVd-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'zA03t1uZJVd-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'zA03t1uZJVd-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'zA03t1uZJVd-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'zA03t1uZJVd-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'zA03t1uZJVd-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'zA03t1uZJVd-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'zA03t1uZJVd-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'zA03t1uZJVd-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'zA03t1uZJVd-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'zA03t1uZJVd-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '25',
        inputNumeric: {
            id: 'VRtNHN9eRCk-Xr12mI7VPn3-val',
            displayName: 'Nutritionists'
        },
        inputCheckboxes: [
            {
                id: 'vaqogvYkQmk-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'vaqogvYkQmk-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'vaqogvYkQmk-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'vaqogvYkQmk-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'vaqogvYkQmk-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'vaqogvYkQmk-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'vaqogvYkQmk-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'vaqogvYkQmk-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'vaqogvYkQmk-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'vaqogvYkQmk-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'vaqogvYkQmk-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'vaqogvYkQmk-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'vaqogvYkQmk-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '26',
        inputNumeric: {
            id: 'APiKd92t2ir-Xr12mI7VPn3-val',
            displayName: 'Audiologists and Speech Therapists'
        },
        inputCheckboxes: [
            {
                id: 'iRQNn3DPrCd-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'iRQNn3DPrCd-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'iRQNn3DPrCd-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'iRQNn3DPrCd-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'iRQNn3DPrCd-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'iRQNn3DPrCd-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'iRQNn3DPrCd-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'iRQNn3DPrCd-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'iRQNn3DPrCd-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'iRQNn3DPrCd-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'iRQNn3DPrCd-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'iRQNn3DPrCd-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'iRQNn3DPrCd-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '27',
        inputNumeric: {
            id: 'OlR0fMhjX0m-Xr12mI7VPn3-val',
            displayName: 'Optometrists and Ophthalmic Opticians'
        },
        inputCheckboxes: [
            {
                id: 'jrLCQmv8GL5-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'jrLCQmv8GL5-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'jrLCQmv8GL5-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'jrLCQmv8GL5-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'jrLCQmv8GL5-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'jrLCQmv8GL5-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'jrLCQmv8GL5-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'jrLCQmv8GL5-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'jrLCQmv8GL5-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'jrLCQmv8GL5-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'jrLCQmv8GL5-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'jrLCQmv8GL5-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'jrLCQmv8GL5-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '28',
        inputNumeric: {
            id: 'gsoW9N4urlj-Xr12mI7VPn3-val',
            displayName: 'Dispensing Opticians'
        },
        inputCheckboxes: [
            {
                id: 'kNg3s5dolnv-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'kNg3s5dolnv-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'kNg3s5dolnv-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'kNg3s5dolnv-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'kNg3s5dolnv-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'kNg3s5dolnv-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'kNg3s5dolnv-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'kNg3s5dolnv-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'kNg3s5dolnv-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'kNg3s5dolnv-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'kNg3s5dolnv-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'kNg3s5dolnv-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'kNg3s5dolnv-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '29',
        inputNumeric: {
            id: 'jctGtGgBRZq-Xr12mI7VPn3-val',
            displayName: 'Medical Prosthetic Technicians'
        },
        inputCheckboxes: [
            {
                id: 'fh0rJ4e7SQS-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'fh0rJ4e7SQS-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'fh0rJ4e7SQS-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'fh0rJ4e7SQS-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'fh0rJ4e7SQS-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'fh0rJ4e7SQS-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'fh0rJ4e7SQS-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'fh0rJ4e7SQS-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'fh0rJ4e7SQS-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'fh0rJ4e7SQS-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'fh0rJ4e7SQS-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'fh0rJ4e7SQS-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'fh0rJ4e7SQS-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '30',
        inputNumeric: {
            id: 'IJJr8VlGH3p-Xr12mI7VPn3-val',
            displayName: 'Medical Records Technicians'
        },
        inputCheckboxes: [
            {
                id: 'mHS0dvMe8Ci-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'mHS0dvMe8Ci-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'mHS0dvMe8Ci-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'mHS0dvMe8Ci-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'mHS0dvMe8Ci-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'mHS0dvMe8Ci-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'mHS0dvMe8Ci-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'mHS0dvMe8Ci-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'mHS0dvMe8Ci-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'mHS0dvMe8Ci-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'mHS0dvMe8Ci-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'mHS0dvMe8Ci-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'mHS0dvMe8Ci-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '31',
        inputNumeric: {
            id: 'SezO1kv61fu-Xr12mI7VPn3-val',
            displayName: 'Medical Assistants'
        },
        inputCheckboxes: [
            {
                id: 'Jcid9lkzapy-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'Jcid9lkzapy-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'Jcid9lkzapy-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'Jcid9lkzapy-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'Jcid9lkzapy-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'Jcid9lkzapy-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'Jcid9lkzapy-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'Jcid9lkzapy-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'Jcid9lkzapy-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'Jcid9lkzapy-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'Jcid9lkzapy-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'Jcid9lkzapy-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'Jcid9lkzapy-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '32',
        inputNumeric: {
            id: 'LzB6PCSjBkO-Xr12mI7VPn3-val',
            displayName: 'Ambulance Workers'
        },
        inputCheckboxes: [
            {
                id: 'Q55SREINwd5-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'Q55SREINwd5-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'Q55SREINwd5-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'Q55SREINwd5-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'Q55SREINwd5-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'Q55SREINwd5-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'Q55SREINwd5-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'Q55SREINwd5-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'Q55SREINwd5-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'Q55SREINwd5-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'Q55SREINwd5-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'Q55SREINwd5-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'Q55SREINwd5-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '33',
        inputNumeric: {
            id: 'dcxvACIrBvY-Xr12mI7VPn3-val',
            displayName: 'Social work and counselling professionals'
        },
        inputCheckboxes: [
            {
                id: 'DCTZJXnTJYh-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'DCTZJXnTJYh-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'DCTZJXnTJYh-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'DCTZJXnTJYh-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'DCTZJXnTJYh-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'DCTZJXnTJYh-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'DCTZJXnTJYh-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'DCTZJXnTJYh-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'DCTZJXnTJYh-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'DCTZJXnTJYh-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'DCTZJXnTJYh-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'DCTZJXnTJYh-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'DCTZJXnTJYh-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '34',
        inputNumeric: {
            id: 'Xo6kBnLlEV8-Xr12mI7VPn3-val',
            displayName: 'Social work associate professionals'
        },
        inputCheckboxes: [
            {
                id: 'RJoEQfGuiU2-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'RJoEQfGuiU2-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'RJoEQfGuiU2-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'RJoEQfGuiU2-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'RJoEQfGuiU2-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'RJoEQfGuiU2-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'RJoEQfGuiU2-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'RJoEQfGuiU2-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'RJoEQfGuiU2-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'RJoEQfGuiU2-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'RJoEQfGuiU2-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'RJoEQfGuiU2-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'RJoEQfGuiU2-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '35',
        inputNumeric: {
            id: 'zZadYPHQXNM-Xr12mI7VPn3-val',
            displayName: 'Biomedical engineer'
        },
        inputCheckboxes: [
            {
                id: 'Hqx5zSgskDT-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'Hqx5zSgskDT-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'Hqx5zSgskDT-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'Hqx5zSgskDT-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'Hqx5zSgskDT-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'Hqx5zSgskDT-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'Hqx5zSgskDT-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'Hqx5zSgskDT-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'Hqx5zSgskDT-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'Hqx5zSgskDT-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'Hqx5zSgskDT-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'Hqx5zSgskDT-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'Hqx5zSgskDT-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '36',
        inputNumeric: {
            id: 'Jslg9Y9vXzD-Xr12mI7VPn3-val',
            displayName: 'Psychologists'
        },
        inputCheckboxes: [
            {
                id: 'uVm3QiiqWy5-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'uVm3QiiqWy5-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'uVm3QiiqWy5-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'uVm3QiiqWy5-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'uVm3QiiqWy5-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'uVm3QiiqWy5-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'uVm3QiiqWy5-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'uVm3QiiqWy5-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'uVm3QiiqWy5-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'uVm3QiiqWy5-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'uVm3QiiqWy5-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'uVm3QiiqWy5-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'uVm3QiiqWy5-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '37',
        inputNumeric: {
            id: 'LrVMH8GSElR-Xr12mI7VPn3-val',
            displayName: 'Medical secretaries'
        },
        inputCheckboxes: [
            {
                id: 'PpUeJpIdiWo-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'PpUeJpIdiWo-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'PpUeJpIdiWo-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'PpUeJpIdiWo-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'PpUeJpIdiWo-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'PpUeJpIdiWo-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'PpUeJpIdiWo-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'PpUeJpIdiWo-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'PpUeJpIdiWo-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'PpUeJpIdiWo-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'PpUeJpIdiWo-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'PpUeJpIdiWo-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'PpUeJpIdiWo-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '38',
        inputNumeric: {
            id: 'xmcjegEZMVZ-Xr12mI7VPn3-val',
            displayName: 'Managerial staff'
        },
        inputCheckboxes: [
            {
                id: 'phb9zYIatb6-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'phb9zYIatb6-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'phb9zYIatb6-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'phb9zYIatb6-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'phb9zYIatb6-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'phb9zYIatb6-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'phb9zYIatb6-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'phb9zYIatb6-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'phb9zYIatb6-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'phb9zYIatb6-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'phb9zYIatb6-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'phb9zYIatb6-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'phb9zYIatb6-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '39',
        inputNumeric: {
            id: 'gTg3LF6m8Wf-Xr12mI7VPn3-val',
            displayName: 'Administrative staff'
        },
        inputCheckboxes: [
            {
                id: 'IN7lO4uq9Bc-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'IN7lO4uq9Bc-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'IN7lO4uq9Bc-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'IN7lO4uq9Bc-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'IN7lO4uq9Bc-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'IN7lO4uq9Bc-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'IN7lO4uq9Bc-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'IN7lO4uq9Bc-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'IN7lO4uq9Bc-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'IN7lO4uq9Bc-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'IN7lO4uq9Bc-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'IN7lO4uq9Bc-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'IN7lO4uq9Bc-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '40',
        inputNumeric: {
            id: 'pvKpQbp6Z1U-Xr12mI7VPn3-val',
            displayName: 'Health information systems personnel'
        },
        inputCheckboxes: [
            {
                id: 'nfuT0F8dooN-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'nfuT0F8dooN-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'nfuT0F8dooN-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'nfuT0F8dooN-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'nfuT0F8dooN-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'nfuT0F8dooN-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'nfuT0F8dooN-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'nfuT0F8dooN-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'nfuT0F8dooN-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'nfuT0F8dooN-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'nfuT0F8dooN-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'nfuT0F8dooN-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'nfuT0F8dooN-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '41',
        inputNumeric: {
            id: 'HywI2ojiBKt-Xr12mI7VPn3-val',
            displayName: 'Engineering and maintenance staff'
        },
        inputCheckboxes: [
            {
                id: 'sUiSZuo91xH-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'sUiSZuo91xH-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'sUiSZuo91xH-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'sUiSZuo91xH-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'sUiSZuo91xH-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'sUiSZuo91xH-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'sUiSZuo91xH-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'sUiSZuo91xH-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'sUiSZuo91xH-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'sUiSZuo91xH-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'sUiSZuo91xH-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'sUiSZuo91xH-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'sUiSZuo91xH-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '42',
        inputNumeric: {
            id: 'EBSWORKmKVt-Xr12mI7VPn3-val',
            displayName: 'Other non-medical professional staff'
        },
        inputCheckboxes: [
            {
                id: 'gblhg0b0SBl-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'gblhg0b0SBl-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'gblhg0b0SBl-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'gblhg0b0SBl-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'gblhg0b0SBl-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'gblhg0b0SBl-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'gblhg0b0SBl-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'gblhg0b0SBl-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'gblhg0b0SBl-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'gblhg0b0SBl-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'gblhg0b0SBl-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'gblhg0b0SBl-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'gblhg0b0SBl-ADfCJWnnU2O-val',
                displayName: 'Regulatory bodies'
            }
        ]
    },
    {
        order: '43',
        inputNumeric: {
            id: 'FBe0vReIEvF-Xr12mI7VPn3-val',
            displayName: 'Other non-medical support staff'
        },
        inputCheckboxes: [
            {
                id: 'Am3lKzfuLds-bj9TvyIDtwi-val',
                displayName: 'Academia'
            },
            {
                id: 'Am3lKzfuLds-lcB0UtS4nuB-val',
                displayName: 'International organisation'
            },
            {
                id: 'Am3lKzfuLds-LvGn3KFEzvA-val',
                displayName: 'Ministry of Health'
            },
            {
                id: 'Am3lKzfuLds-wcnRf5LJrnK-val',
                displayName: 'Ministry of Internal or External Affairs'
            },
            {
                id: 'Am3lKzfuLds-MXfWGD11wLh-val',
                displayName: 'Ministry of Labour'
            },
            {
                id: 'Am3lKzfuLds-P5jMO9Y0SRn-val',
                displayName: 'Multi Agency organisations'
            },
            {
                id: 'Am3lKzfuLds-eWjpUQpzWKX-val',
                displayName: 'National HRH Observatory'
            },
            {
                id: 'Am3lKzfuLds-hC2N9T8F5JD-val',
                displayName: ' National/Central Statistical Office'
            },
            {
                id: 'Am3lKzfuLds-xgbBSeyiDWp-val',
                displayName: 'Other multi Agency databases'
            },
            {
                id: 'Am3lKzfuLds-IhnQTXo2sCi-val',
                displayName: 'Other WHO Regional databases'
            },
            {
                id: 'Am3lKzfuLds-rEUC186wftQ-val',
                displayName: 'Professional association'
            },
            {
                id: 'Am3lKzfuLds-s5mo8EjeKiY-val',
                displayName: 'Regional HRH Observatory'
            },
            {
                id: 'Am3lKzfuLds-ADfCJWnnU2O-val',
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

