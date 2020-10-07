export interface DataElementGroup {
    order: string,
    readOnly?: boolean,
    inputNumeric: CustomDataElement,
    inputCheckboxes: CustomDataElement[],
}

export interface CustomDataElement {
    id: string,
    displayName: string

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

// export const dataElementGroups: DataElementGroup[] = [
//     {
//         order: "1",
//         readOnly: true,
//         inputNumeric: { id: "qcDKkL7Xkl4-Xr12mI7VPn3-val", displayName: "Medical Doctors" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "1.1",
//         inputNumeric: { id: "mHFT8rZ6ksz-Xr12mI7VPn3-val", displayName: "General Medical Practitioners" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "1.2",
//         inputNumeric: { id: "qMdjQN91JDi-Xr12mI7VPn3-val", displayName: "Specialist Medical Practitioners" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "1.2.1",
//         inputNumeric: { id: "TTMOwYLxC3K-Xr12mI7VPn3-val", displayName: "General paediatricians" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "1.2.2",
//         inputNumeric: { id: "P2IIjEqx3Ln-Xr12mI7VPn3-val", displayName: "Obstetricians and Gynaecologists" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "1.2.3",
//         inputNumeric: { id: "l9UT5O04oHe-Xr12mI7VPn3-val", displayName: "Psychiatrists Practitioners" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "1.2.4",
//         inputNumeric: { id: "Ak0hKFGvtdT-Xr12mI7VPn3-val", displayName: "Medical group of Specialists Practitioners" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "1.2.5",
//         inputNumeric: { id: "mvxUYayh4r7-Xr12mI7VPn3-val", displayName: "Surgical group of Specialists Practitioners" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "1.2.6",
//         inputNumeric: { id: "kxCwvwExOHq-Xr12mI7VPn3-val", displayName: "Other Specialists Practitioners" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "1.3",
//         inputNumeric: { id: "ePgUyGHxJuI-Xr12mI7VPn3-val", displayName: "Medical doctors not further defined" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "2",
//         readOnly: true,
//         inputNumeric: { id: "ok6yvzSABcU-Xr12mI7VPn3-val", displayName: "Nursing Personnel" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "2.1",
//         inputNumeric: { id: "Rnuo4SphAdV-Xr12mI7VPn3-val", displayName: "Nursing Professionals" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "2.2",
//         inputNumeric: { id: "mHD3Efts57E-Xr12mI7VPn3-val", displayName: "Nursing Associate Professionals" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "2.3",
//         inputNumeric: { id: "T58TEnz6WgZ-Xr12mI7VPn3-val", displayName: "Nurses not further defined" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "3",
//         readOnly: true,
//         inputNumeric: { id: "bDQt7HaZCu9-Xr12mI7VPn3-val", displayName: "Midwifery personnel" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "3.1",
//         inputNumeric: { id: "EqDGfdOIX9a-Xr12mI7VPn3-val", displayName: "Midwifery Professionals" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "3.2",
//         inputNumeric: { id: "rfqaKzMPEdf-Xr12mI7VPn3-val", displayName: "Midwifery Associate Professionals" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "3.3",
//         inputNumeric: { id: "QC2yRZy5Fn7-Xr12mI7VPn3-val", displayName: "Midwives not further defined" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "4",
//         inputNumeric: { id: "B6boWAxO6T4-Xr12mI7VPn3-val", displayName: "Dentists" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "5",
//         inputNumeric: { id: "UPfQopzBdyx-Xr12mI7VPn3-val", displayName: "Dental Assistants and Therapists" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "6",
//         inputNumeric: { id: "f1tdQ6FNHl3-Xr12mI7VPn3-val", displayName: "Dental Prosthetic Technicians" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "7",
//         inputNumeric: { id: "lHfsZY4fyv4-Xr12mI7VPn3-val", displayName: "Pharmacists" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "8",
//         inputNumeric: { id: "kLVRrIrdx4o-Xr12mI7VPn3-val", displayName: "Pharmaceutical Technicians" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "9",
//         inputNumeric: { id: "BFv7qbrVjSE-Xr12mI7VPn3-val", displayName: "Paramedical Practitioners" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "10",
//         inputNumeric: { id: "px0f38y2cYc-Xr12mI7VPn3-val", displayName: "Medical and Pathology Laboratory scientists" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "11",
//         inputNumeric: { id: "JLZfYSnv7d0-Xr12mI7VPn3-val", displayName: "Medical Imaging and Therapeutic Equipment Technicians" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "12",
//         inputNumeric: { id: "hiJpLYx5O1M-Xr12mI7VPn3-val", displayName: "Medical and Pathology Laboratory Technicians" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "13",
//         inputNumeric: { id: "KxFMQ4zRaPS-Xr12mI7VPn3-val", displayName: "Environmental and Occupational Health Professionals" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "14",
//         inputNumeric: { id: "W24Nl5q4JeN-Xr12mI7VPn3-val", displayName: "Environmental and Occupational Health Inspectors/associates" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "15",
//         inputNumeric: { id: "ZF8DKPqU85S-Xr12mI7VPn3-val", displayName: "Traditional and Complementary Medicine Professionals" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "16",
//         inputNumeric: { id: "hzznMtRzS4K-Xr12mI7VPn3-val", displayName: "Traditional and Complementary Medicine Associate Professionals" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "17",
//         inputNumeric: { id: "i3wZesLV0nt-Xr12mI7VPn3-val", displayName: "Community Health Workers" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "18",
//         inputNumeric: { id: "QFPE2nUccBH-Xr12mI7VPn3-val", displayName: "Personal care workers in health service" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "19",
//         inputNumeric: { id: "JUpiZAY6jKT-Xr12mI7VPn3-val", displayName: "Health Care Assistants" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "20",
//         inputNumeric: { id: "c7TR3fxDRK8-Xr12mI7VPn3-val", displayName: "Home-based Personal Care" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "21",
//         inputNumeric: { id: "NdKLrVnkH7Y-Xr12mI7VPn3-val", displayName: "Personal care workers in health service n.e.c" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "22",
//         inputNumeric: { id: "izp60TKwy42-Xr12mI7VPn3-val", displayName: "Physiotherapists" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "23",
//         inputNumeric: { id: "QF1ITmMPR5G-Xr12mI7VPn3-val", displayName: "Physiotherapy Technicians and Assistants" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "24",
//         inputNumeric: { id: "iv3ZPC0JsHh-Xr12mI7VPn3-val", displayName: "Dieticians" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "25",
//         inputNumeric: { id: "VRtNHN9eRCk-Xr12mI7VPn3-val", displayName: "Nutritionists" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "26",
//         inputNumeric: { id: "APiKd92t2ir-Xr12mI7VPn3-val", displayName: "Audiologists and Speech Therapists" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "27",
//         inputNumeric: { id: "OlR0fMhjX0m-Xr12mI7VPn3-val", displayName: "Optometrists and Ophthalmic Opticians" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "28",
//         inputNumeric: { id: "gsoW9N4urlj-Xr12mI7VPn3-val", displayName: "Dispensing Opticians" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "29",
//         inputNumeric: { id: "jctGtGgBRZq-Xr12mI7VPn3-val", displayName: "Medical Prosthetic Technicians" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "30",
//         inputNumeric: { id: "IJJr8VlGH3p-Xr12mI7VPn3-val", displayName: "Medical Records Technicians" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "31",
//         inputNumeric: { id: "SezO1kv61fu-Xr12mI7VPn3-val", displayName: "Medical Assistants" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "32",
//         inputNumeric: { id: "LzB6PCSjBkO-Xr12mI7VPn3-val", displayName: "Ambulance Workers" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "33",
//         inputNumeric: { id: "dcxvACIrBvY-Xr12mI7VPn3-val", displayName: "Social work and counselling professionals" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "34",
//         inputNumeric: { id: "Xo6kBnLlEV8-Xr12mI7VPn3-val", displayName: "Social work associate professionals" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "35",
//         inputNumeric: { id: "zZadYPHQXNM-Xr12mI7VPn3-val", displayName: "Biomedical engineer" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "36",
//         inputNumeric: { id: "Jslg9Y9vXzD-Xr12mI7VPn3-val", displayName: "Psychologists" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "37",
//         inputNumeric: { id: "LrVMH8GSElR-Xr12mI7VPn3-val", displayName: "Medical secretaries" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "38",
//         inputNumeric: { id: "xmcjegEZMVZ-Xr12mI7VPn3-val", displayName: "Managerial staff" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "39",
//         inputNumeric: { id: "gTg3LF6m8Wf-Xr12mI7VPn3-val", displayName: "Administrative staff" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "40",
//         inputNumeric: { id: "pvKpQbp6Z1U-Xr12mI7VPn3-val", displayName: "Health information systems personnel" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "41",
//         inputNumeric: { id: "HywI2ojiBKt-Xr12mI7VPn3-val", displayName: "Engineering and maintenance staff" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "42",
//         inputNumeric: { id: "EBSWORKmKVt-Xr12mI7VPn3-val", displayName: "Other non-medical professional staff" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
//     {
//         order: "43",
//         inputNumeric: { id: "FBe0vReIEvF-Xr12mI7VPn3-val", displayName: "Other non-medical support staff" },
//         inputCheckboxes:
//             [
//                 { id: "", displayName: "Academia" },
//                 { id: "", displayName: "International organisation" },
//                 { id: "", displayName: "Ministry of Health" },
//                 { id: "", displayName: "Ministry of Internal or External Affairs" },
//                 { id: "", displayName: "Ministry of Labour" },
//                 { id: "", displayName: "Multi Agency organisations" },
//                 { id: "", displayName: "National HRH Observatory" },
//                 { id: "", displayName: " National/Central Statistical Office" },
//                 { id: "", displayName: "Other multi Agency databases" },
//                 { id: "", displayName: "Other WHO Regional databases" },
//                 { id: "", displayName: "Professional association" },
//                 { id: "", displayName: "Regional HRH Observatory" },
//                 { id: "", displayName: "Regulatory bodies" }
//             ]
//     },
// ]





// const checkBoxes = [
//     "TVBVT6naFjQ-bj9TvyIDtwi-val",
//     "TVBVT6naFjQ-lcB0UtS4nuB-val",
//     "TVBVT6naFjQ-LvGn3KFEzvA-val",
//     "TVBVT6naFjQ-wcnRf5LJrnK-val",
//     "TVBVT6naFjQ-MXfWGD11wLh-val",
//     "TVBVT6naFjQ-P5jMO9Y0SRn-val",
//     "TVBVT6naFjQ-eWjpUQpzWKX-val",
//     "TVBVT6naFjQ-hC2N9T8F5JD-val",
//     "TVBVT6naFjQ-xgbBSeyiDWp-val",
//     "TVBVT6naFjQ-IhnQTXo2sCi-val",
//     "TVBVT6naFjQ-rEUC186wftQ-val",
//     "TVBVT6naFjQ-s5mo8EjeKiY-val",
//     "TVBVT6naFjQ-ADfCJWnnU2O-val",
//     "t8Oxv1y44wM-bj9TvyIDtwi-val",
//     "t8Oxv1y44wM-lcB0UtS4nuB-val",
//     "t8Oxv1y44wM-LvGn3KFEzvA-val",
//     "t8Oxv1y44wM-wcnRf5LJrnK-val",
//     "t8Oxv1y44wM-MXfWGD11wLh-val",
//     "t8Oxv1y44wM-P5jMO9Y0SRn-val",
//     "t8Oxv1y44wM-eWjpUQpzWKX-val",
//     "t8Oxv1y44wM-hC2N9T8F5JD-val",
//     "t8Oxv1y44wM-xgbBSeyiDWp-val",
//     "t8Oxv1y44wM-IhnQTXo2sCi-val",
//     "t8Oxv1y44wM-rEUC186wftQ-val",
//     "t8Oxv1y44wM-s5mo8EjeKiY-val",
//     "t8Oxv1y44wM-ADfCJWnnU2O-val",
//     "BhkUnrfLZ1F-bj9TvyIDtwi-val",
//     "BhkUnrfLZ1F-lcB0UtS4nuB-val",
//     "BhkUnrfLZ1F-LvGn3KFEzvA-val",
//     "BhkUnrfLZ1F-wcnRf5LJrnK-val",
//     "BhkUnrfLZ1F-MXfWGD11wLh-val",
//     "BhkUnrfLZ1F-P5jMO9Y0SRn-val",
//     "BhkUnrfLZ1F-eWjpUQpzWKX-val",
//     "BhkUnrfLZ1F-hC2N9T8F5JD-val",
//     "BhkUnrfLZ1F-xgbBSeyiDWp-val",
//     "BhkUnrfLZ1F-IhnQTXo2sCi-val",
//     "BhkUnrfLZ1F-rEUC186wftQ-val",
//     "BhkUnrfLZ1F-s5mo8EjeKiY-val",
//     "BhkUnrfLZ1F-ADfCJWnnU2O-val",
//     "QTxtciKOpi4-bj9TvyIDtwi-val",
//     "QTxtciKOpi4-lcB0UtS4nuB-val",
//     "QTxtciKOpi4-LvGn3KFEzvA-val",
//     "QTxtciKOpi4-wcnRf5LJrnK-val",
//     "QTxtciKOpi4-MXfWGD11wLh-val",
//     "QTxtciKOpi4-P5jMO9Y0SRn-val",
//     "QTxtciKOpi4-eWjpUQpzWKX-val",
//     "QTxtciKOpi4-hC2N9T8F5JD-val",
//     "QTxtciKOpi4-xgbBSeyiDWp-val",
//     "QTxtciKOpi4-IhnQTXo2sCi-val",
//     "QTxtciKOpi4-rEUC186wftQ-val",
//     "QTxtciKOpi4-s5mo8EjeKiY-val",
//     "QTxtciKOpi4-ADfCJWnnU2O-val",
//     "GfZATdx6tyR-bj9TvyIDtwi-val",
//     "GfZATdx6tyR-lcB0UtS4nuB-val",
//     "GfZATdx6tyR-LvGn3KFEzvA-val",
//     "GfZATdx6tyR-wcnRf5LJrnK-val",
//     "GfZATdx6tyR-MXfWGD11wLh-val",
//     "GfZATdx6tyR-P5jMO9Y0SRn-val",
//     "GfZATdx6tyR-eWjpUQpzWKX-val",
//     "GfZATdx6tyR-hC2N9T8F5JD-val",
//     "GfZATdx6tyR-xgbBSeyiDWp-val",
//     "GfZATdx6tyR-IhnQTXo2sCi-val",
//     "GfZATdx6tyR-rEUC186wftQ-val",
//     "GfZATdx6tyR-s5mo8EjeKiY-val",
//     "GfZATdx6tyR-ADfCJWnnU2O-val",
//     "pLp6oO7Nz7q-bj9TvyIDtwi-val",
//     "pLp6oO7Nz7q-lcB0UtS4nuB-val",
//     "pLp6oO7Nz7q-LvGn3KFEzvA-val",
//     "pLp6oO7Nz7q-wcnRf5LJrnK-val",
//     "pLp6oO7Nz7q-MXfWGD11wLh-val",
//     "pLp6oO7Nz7q-P5jMO9Y0SRn-val",
//     "pLp6oO7Nz7q-eWjpUQpzWKX-val",
//     "pLp6oO7Nz7q-hC2N9T8F5JD-val",
//     "pLp6oO7Nz7q-xgbBSeyiDWp-val",
//     "pLp6oO7Nz7q-IhnQTXo2sCi-val",
//     "pLp6oO7Nz7q-rEUC186wftQ-val",
//     "pLp6oO7Nz7q-s5mo8EjeKiY-val",
//     "pLp6oO7Nz7q-ADfCJWnnU2O-val",
//     "ULKGjVBEVtV-bj9TvyIDtwi-val",
//     "ULKGjVBEVtV-lcB0UtS4nuB-val",
//     "ULKGjVBEVtV-LvGn3KFEzvA-val",
//     "ULKGjVBEVtV-wcnRf5LJrnK-val",
//     "ULKGjVBEVtV-MXfWGD11wLh-val",
//     "ULKGjVBEVtV-P5jMO9Y0SRn-val",
//     "ULKGjVBEVtV-eWjpUQpzWKX-val",
//     "ULKGjVBEVtV-hC2N9T8F5JD-val",
//     "ULKGjVBEVtV-xgbBSeyiDWp-val",
//     "ULKGjVBEVtV-IhnQTXo2sCi-val",
//     "ULKGjVBEVtV-rEUC186wftQ-val",
//     "ULKGjVBEVtV-s5mo8EjeKiY-val",
//     "ULKGjVBEVtV-ADfCJWnnU2O-val",
//     "ivDFPAzvJRs-bj9TvyIDtwi-val",
//     "ivDFPAzvJRs-lcB0UtS4nuB-val",
//     "ivDFPAzvJRs-LvGn3KFEzvA-val",
//     "ivDFPAzvJRs-wcnRf5LJrnK-val",
//     "ivDFPAzvJRs-MXfWGD11wLh-val",
//     "ivDFPAzvJRs-P5jMO9Y0SRn-val",
//     "ivDFPAzvJRs-eWjpUQpzWKX-val",
//     "ivDFPAzvJRs-hC2N9T8F5JD-val",
//     "ivDFPAzvJRs-xgbBSeyiDWp-val",
//     "ivDFPAzvJRs-IhnQTXo2sCi-val",
//     "ivDFPAzvJRs-rEUC186wftQ-val",
//     "ivDFPAzvJRs-s5mo8EjeKiY-val",
//     "ivDFPAzvJRs-ADfCJWnnU2O-val",
//     "aTMXJbKJthX-bj9TvyIDtwi-val",
//     "aTMXJbKJthX-lcB0UtS4nuB-val",
//     "aTMXJbKJthX-LvGn3KFEzvA-val",
//     "aTMXJbKJthX-wcnRf5LJrnK-val",
//     "aTMXJbKJthX-MXfWGD11wLh-val",
//     "aTMXJbKJthX-P5jMO9Y0SRn-val",
//     "aTMXJbKJthX-eWjpUQpzWKX-val",
//     "aTMXJbKJthX-hC2N9T8F5JD-val",
//     "aTMXJbKJthX-xgbBSeyiDWp-val",
//     "aTMXJbKJthX-IhnQTXo2sCi-val",
//     "aTMXJbKJthX-rEUC186wftQ-val",
//     "aTMXJbKJthX-s5mo8EjeKiY-val",
//     "aTMXJbKJthX-ADfCJWnnU2O-val",
//     "y8MA1BOZ3OO-bj9TvyIDtwi-val",
//     "y8MA1BOZ3OO-lcB0UtS4nuB-val",
//     "y8MA1BOZ3OO-LvGn3KFEzvA-val",
//     "y8MA1BOZ3OO-wcnRf5LJrnK-val",
//     "y8MA1BOZ3OO-MXfWGD11wLh-val",
//     "y8MA1BOZ3OO-P5jMO9Y0SRn-val",
//     "y8MA1BOZ3OO-eWjpUQpzWKX-val",
//     "y8MA1BOZ3OO-hC2N9T8F5JD-val",
//     "y8MA1BOZ3OO-xgbBSeyiDWp-val",
//     "y8MA1BOZ3OO-IhnQTXo2sCi-val",
//     "y8MA1BOZ3OO-rEUC186wftQ-val",
//     "y8MA1BOZ3OO-s5mo8EjeKiY-val",
//     "y8MA1BOZ3OO-ADfCJWnnU2O-val",
//     "SV71PdZSkmd-bj9TvyIDtwi-val",
//     "SV71PdZSkmd-lcB0UtS4nuB-val",
//     "SV71PdZSkmd-LvGn3KFEzvA-val",
//     "SV71PdZSkmd-wcnRf5LJrnK-val",
//     "SV71PdZSkmd-MXfWGD11wLh-val",
//     "SV71PdZSkmd-P5jMO9Y0SRn-val",
//     "SV71PdZSkmd-eWjpUQpzWKX-val",
//     "SV71PdZSkmd-hC2N9T8F5JD-val",
//     "SV71PdZSkmd-xgbBSeyiDWp-val",
//     "SV71PdZSkmd-IhnQTXo2sCi-val",
//     "SV71PdZSkmd-rEUC186wftQ-val",
//     "SV71PdZSkmd-s5mo8EjeKiY-val",
//     "SV71PdZSkmd-ADfCJWnnU2O-val",
//     "TdwikGCtQ2F-bj9TvyIDtwi-val",
//     "TdwikGCtQ2F-lcB0UtS4nuB-val",
//     "TdwikGCtQ2F-LvGn3KFEzvA-val",
//     "TdwikGCtQ2F-wcnRf5LJrnK-val",
//     "TdwikGCtQ2F-MXfWGD11wLh-val",
//     "TdwikGCtQ2F-P5jMO9Y0SRn-val",
//     "TdwikGCtQ2F-eWjpUQpzWKX-val",
//     "TdwikGCtQ2F-hC2N9T8F5JD-val",
//     "TdwikGCtQ2F-xgbBSeyiDWp-val",
//     "TdwikGCtQ2F-IhnQTXo2sCi-val",
//     "TdwikGCtQ2F-rEUC186wftQ-val",
//     "TdwikGCtQ2F-s5mo8EjeKiY-val",
//     "TdwikGCtQ2F-ADfCJWnnU2O-val",
//     "WGJxTIBFQK2-bj9TvyIDtwi-val",
//     "WGJxTIBFQK2-lcB0UtS4nuB-val",
//     "WGJxTIBFQK2-LvGn3KFEzvA-val",
//     "WGJxTIBFQK2-wcnRf5LJrnK-val",
//     "WGJxTIBFQK2-MXfWGD11wLh-val",
//     "WGJxTIBFQK2-P5jMO9Y0SRn-val",
//     "WGJxTIBFQK2-eWjpUQpzWKX-val",
//     "WGJxTIBFQK2-hC2N9T8F5JD-val",
//     "WGJxTIBFQK2-xgbBSeyiDWp-val",
//     "WGJxTIBFQK2-IhnQTXo2sCi-val",
//     "WGJxTIBFQK2-rEUC186wftQ-val",
//     "WGJxTIBFQK2-s5mo8EjeKiY-val",
//     "WGJxTIBFQK2-ADfCJWnnU2O-val",
//     "OgG8wQ6Zajq-bj9TvyIDtwi-val",
//     "OgG8wQ6Zajq-lcB0UtS4nuB-val",
//     "OgG8wQ6Zajq-LvGn3KFEzvA-val",
//     "OgG8wQ6Zajq-wcnRf5LJrnK-val",
//     "OgG8wQ6Zajq-MXfWGD11wLh-val",
//     "OgG8wQ6Zajq-P5jMO9Y0SRn-val",
//     "OgG8wQ6Zajq-eWjpUQpzWKX-val",
//     "OgG8wQ6Zajq-hC2N9T8F5JD-val",
//     "OgG8wQ6Zajq-xgbBSeyiDWp-val",
//     "OgG8wQ6Zajq-IhnQTXo2sCi-val",
//     "OgG8wQ6Zajq-rEUC186wftQ-val",
//     "OgG8wQ6Zajq-s5mo8EjeKiY-val",
//     "OgG8wQ6Zajq-ADfCJWnnU2O-val",
//     "V8OUvPiHabT-bj9TvyIDtwi-val",
//     "V8OUvPiHabT-lcB0UtS4nuB-val",
//     "V8OUvPiHabT-LvGn3KFEzvA-val",
//     "V8OUvPiHabT-wcnRf5LJrnK-val",
//     "V8OUvPiHabT-MXfWGD11wLh-val",
//     "V8OUvPiHabT-P5jMO9Y0SRn-val",
//     "V8OUvPiHabT-eWjpUQpzWKX-val",
//     "V8OUvPiHabT-hC2N9T8F5JD-val",
//     "V8OUvPiHabT-xgbBSeyiDWp-val",
//     "V8OUvPiHabT-IhnQTXo2sCi-val",
//     "V8OUvPiHabT-rEUC186wftQ-val",
//     "V8OUvPiHabT-s5mo8EjeKiY-val",
//     "V8OUvPiHabT-ADfCJWnnU2O-val",
//     "RSMht6Qosgc-bj9TvyIDtwi-val",
//     "RSMht6Qosgc-lcB0UtS4nuB-val",
//     "RSMht6Qosgc-LvGn3KFEzvA-val",
//     "RSMht6Qosgc-wcnRf5LJrnK-val",
//     "RSMht6Qosgc-MXfWGD11wLh-val",
//     "RSMht6Qosgc-P5jMO9Y0SRn-val",
//     "RSMht6Qosgc-eWjpUQpzWKX-val",
//     "RSMht6Qosgc-hC2N9T8F5JD-val",
//     "RSMht6Qosgc-IhnQTXo2sCi-val",
//     "RSMht6Qosgc-xgbBSeyiDWp-val",
//     "RSMht6Qosgc-rEUC186wftQ-val",
//     "RSMht6Qosgc-s5mo8EjeKiY-val",
//     "RSMht6Qosgc-ADfCJWnnU2O-val",
//     "oLW42C1cyO6-bj9TvyIDtwi-val",
//     "oLW42C1cyO6-lcB0UtS4nuB-val",
//     "oLW42C1cyO6-LvGn3KFEzvA-val",
//     "oLW42C1cyO6-wcnRf5LJrnK-val",
//     "oLW42C1cyO6-MXfWGD11wLh-val",
//     "oLW42C1cyO6-P5jMO9Y0SRn-val",
//     "oLW42C1cyO6-eWjpUQpzWKX-val",
//     "oLW42C1cyO6-hC2N9T8F5JD-val",
//     "oLW42C1cyO6-xgbBSeyiDWp-val",
//     "oLW42C1cyO6-IhnQTXo2sCi-val",
//     "oLW42C1cyO6-rEUC186wftQ-val",
//     "oLW42C1cyO6-s5mo8EjeKiY-val",
//     "oLW42C1cyO6-ADfCJWnnU2O-val",
//     "lJEqAtOXtsG-bj9TvyIDtwi-val",
//     "lJEqAtOXtsG-lcB0UtS4nuB-val",
//     "lJEqAtOXtsG-LvGn3KFEzvA-val",
//     "lJEqAtOXtsG-wcnRf5LJrnK-val",
//     "lJEqAtOXtsG-MXfWGD11wLh-val",
//     "lJEqAtOXtsG-P5jMO9Y0SRn-val",
//     "lJEqAtOXtsG-eWjpUQpzWKX-val",
//     "lJEqAtOXtsG-hC2N9T8F5JD-val",
//     "lJEqAtOXtsG-xgbBSeyiDWp-val",
//     "lJEqAtOXtsG-IhnQTXo2sCi-val",
//     "lJEqAtOXtsG-rEUC186wftQ-val",
//     "lJEqAtOXtsG-s5mo8EjeKiY-val",
//     "lJEqAtOXtsG-ADfCJWnnU2O-val",
//     "NHKS3IKZUm0-bj9TvyIDtwi-val",
//     "NHKS3IKZUm0-lcB0UtS4nuB-val",
//     "NHKS3IKZUm0-LvGn3KFEzvA-val",
//     "NHKS3IKZUm0-wcnRf5LJrnK-val",
//     "NHKS3IKZUm0-MXfWGD11wLh-val",
//     "NHKS3IKZUm0-P5jMO9Y0SRn-val",
//     "NHKS3IKZUm0-eWjpUQpzWKX-val",
//     "NHKS3IKZUm0-hC2N9T8F5JD-val",
//     "NHKS3IKZUm0-xgbBSeyiDWp-val",
//     "NHKS3IKZUm0-IhnQTXo2sCi-val",
//     "NHKS3IKZUm0-rEUC186wftQ-val",
//     "NHKS3IKZUm0-s5mo8EjeKiY-val",
//     "NHKS3IKZUm0-ADfCJWnnU2O-val",
//     "aGH9AIGSrvk-bj9TvyIDtwi-val",
//     "aGH9AIGSrvk-lcB0UtS4nuB-val",
//     "aGH9AIGSrvk-LvGn3KFEzvA-val",
//     "aGH9AIGSrvk-wcnRf5LJrnK-val",
//     "aGH9AIGSrvk-MXfWGD11wLh-val",
//     "aGH9AIGSrvk-P5jMO9Y0SRn-val",
//     "aGH9AIGSrvk-eWjpUQpzWKX-val",
//     "aGH9AIGSrvk-hC2N9T8F5JD-val",
//     "aGH9AIGSrvk-xgbBSeyiDWp-val",
//     "aGH9AIGSrvk-IhnQTXo2sCi-val",
//     "aGH9AIGSrvk-rEUC186wftQ-val",
//     "aGH9AIGSrvk-s5mo8EjeKiY-val",
//     "aGH9AIGSrvk-ADfCJWnnU2O-val",
//     "CSfXgrqyeWA-bj9TvyIDtwi-val",
//     "CSfXgrqyeWA-lcB0UtS4nuB-val",
//     "CSfXgrqyeWA-LvGn3KFEzvA-val",
//     "CSfXgrqyeWA-wcnRf5LJrnK-val",
//     "CSfXgrqyeWA-MXfWGD11wLh-val",
//     "CSfXgrqyeWA-P5jMO9Y0SRn-val",
//     "CSfXgrqyeWA-eWjpUQpzWKX-val",
//     "CSfXgrqyeWA-hC2N9T8F5JD-val",
//     "CSfXgrqyeWA-xgbBSeyiDWp-val",
//     "CSfXgrqyeWA-IhnQTXo2sCi-val",
//     "CSfXgrqyeWA-rEUC186wftQ-val",
//     "CSfXgrqyeWA-s5mo8EjeKiY-val",
//     "CSfXgrqyeWA-ADfCJWnnU2O-val",
//     "zzqYlPsU5oh-bj9TvyIDtwi-val",
//     "zzqYlPsU5oh-lcB0UtS4nuB-val",
//     "zzqYlPsU5oh-LvGn3KFEzvA-val",
//     "zzqYlPsU5oh-wcnRf5LJrnK-val",
//     "zzqYlPsU5oh-MXfWGD11wLh-val",
//     "zzqYlPsU5oh-P5jMO9Y0SRn-val",
//     "zzqYlPsU5oh-eWjpUQpzWKX-val",
//     "zzqYlPsU5oh-hC2N9T8F5JD-val",
//     "zzqYlPsU5oh-xgbBSeyiDWp-val",
//     "zzqYlPsU5oh-IhnQTXo2sCi-val",
//     "zzqYlPsU5oh-rEUC186wftQ-val",
//     "zzqYlPsU5oh-s5mo8EjeKiY-val",
//     "zzqYlPsU5oh-ADfCJWnnU2O-val",
//     "SWyR9i14Pxn-bj9TvyIDtwi-val",
//     "SWyR9i14Pxn-lcB0UtS4nuB-val",
//     "SWyR9i14Pxn-LvGn3KFEzvA-val",
//     "SWyR9i14Pxn-wcnRf5LJrnK-val",
//     "SWyR9i14Pxn-MXfWGD11wLh-val",
//     "SWyR9i14Pxn-P5jMO9Y0SRn-val",
//     "SWyR9i14Pxn-eWjpUQpzWKX-val",
//     "SWyR9i14Pxn-hC2N9T8F5JD-val",
//     "SWyR9i14Pxn-xgbBSeyiDWp-val",
//     "SWyR9i14Pxn-IhnQTXo2sCi-val",
//     "SWyR9i14Pxn-rEUC186wftQ-val",
//     "SWyR9i14Pxn-s5mo8EjeKiY-val",
//     "SWyR9i14Pxn-ADfCJWnnU2O-val",
//     "NgX4KMh3Ijn-bj9TvyIDtwi-val",
//     "NgX4KMh3Ijn-lcB0UtS4nuB-val",
//     "NgX4KMh3Ijn-LvGn3KFEzvA-val",
//     "NgX4KMh3Ijn-wcnRf5LJrnK-val",
//     "NgX4KMh3Ijn-MXfWGD11wLh-val",
//     "NgX4KMh3Ijn-P5jMO9Y0SRn-val",
//     "NgX4KMh3Ijn-eWjpUQpzWKX-val",
//     "NgX4KMh3Ijn-hC2N9T8F5JD-val",
//     "NgX4KMh3Ijn-xgbBSeyiDWp-val",
//     "NgX4KMh3Ijn-IhnQTXo2sCi-val",
//     "NgX4KMh3Ijn-rEUC186wftQ-val",
//     "NgX4KMh3Ijn-s5mo8EjeKiY-val",
//     "NgX4KMh3Ijn-ADfCJWnnU2O-val",
//     "zEvdz7LGHzP-bj9TvyIDtwi-val",
//     "zEvdz7LGHzP-lcB0UtS4nuB-val",
//     "zEvdz7LGHzP-LvGn3KFEzvA-val",
//     "zEvdz7LGHzP-wcnRf5LJrnK-val",
//     "zEvdz7LGHzP-MXfWGD11wLh-val",
//     "zEvdz7LGHzP-P5jMO9Y0SRn-val",
//     "zEvdz7LGHzP-eWjpUQpzWKX-val",
//     "zEvdz7LGHzP-hC2N9T8F5JD-val",
//     "zEvdz7LGHzP-xgbBSeyiDWp-val",
//     "zEvdz7LGHzP-IhnQTXo2sCi-val",
//     "zEvdz7LGHzP-rEUC186wftQ-val",
//     "zEvdz7LGHzP-s5mo8EjeKiY-val",
//     "zEvdz7LGHzP-ADfCJWnnU2O-val",
//     "CMaEmSFStl9-bj9TvyIDtwi-val",
//     "CMaEmSFStl9-lcB0UtS4nuB-val",
//     "CMaEmSFStl9-LvGn3KFEzvA-val",
//     "CMaEmSFStl9-wcnRf5LJrnK-val",
//     "CMaEmSFStl9-MXfWGD11wLh-val",
//     "CMaEmSFStl9-P5jMO9Y0SRn-val",
//     "CMaEmSFStl9-eWjpUQpzWKX-val",
//     "CMaEmSFStl9-hC2N9T8F5JD-val",
//     "CMaEmSFStl9-xgbBSeyiDWp-val",
//     "CMaEmSFStl9-IhnQTXo2sCi-val",
//     "CMaEmSFStl9-rEUC186wftQ-val",
//     "CMaEmSFStl9-s5mo8EjeKiY-val",
//     "CMaEmSFStl9-ADfCJWnnU2O-val",
//     "EFe7oKmUuO2-bj9TvyIDtwi-val",
//     "EFe7oKmUuO2-lcB0UtS4nuB-val",
//     "EFe7oKmUuO2-LvGn3KFEzvA-val",
//     "EFe7oKmUuO2-wcnRf5LJrnK-val",
//     "EFe7oKmUuO2-MXfWGD11wLh-val",
//     "EFe7oKmUuO2-P5jMO9Y0SRn-val",
//     "EFe7oKmUuO2-eWjpUQpzWKX-val",
//     "EFe7oKmUuO2-hC2N9T8F5JD-val",
//     "EFe7oKmUuO2-xgbBSeyiDWp-val",
//     "EFe7oKmUuO2-IhnQTXo2sCi-val",
//     "EFe7oKmUuO2-rEUC186wftQ-val",
//     "EFe7oKmUuO2-s5mo8EjeKiY-val",
//     "EFe7oKmUuO2-ADfCJWnnU2O-val",
//     "iqFs2UlQGBt-bj9TvyIDtwi-val",
//     "iqFs2UlQGBt-lcB0UtS4nuB-val",
//     "iqFs2UlQGBt-LvGn3KFEzvA-val",
//     "iqFs2UlQGBt-wcnRf5LJrnK-val",
//     "iqFs2UlQGBt-MXfWGD11wLh-val",
//     "iqFs2UlQGBt-P5jMO9Y0SRn-val",
//     "iqFs2UlQGBt-eWjpUQpzWKX-val",
//     "iqFs2UlQGBt-hC2N9T8F5JD-val",
//     "iqFs2UlQGBt-xgbBSeyiDWp-val",
//     "iqFs2UlQGBt-IhnQTXo2sCi-val",
//     "iqFs2UlQGBt-rEUC186wftQ-val",
//     "iqFs2UlQGBt-s5mo8EjeKiY-val",
//     "iqFs2UlQGBt-ADfCJWnnU2O-val",
//     "aeMjonuMtcc-bj9TvyIDtwi-val",
//     "aeMjonuMtcc-lcB0UtS4nuB-val",
//     "aeMjonuMtcc-LvGn3KFEzvA-val",
//     "aeMjonuMtcc-wcnRf5LJrnK-val",
//     "aeMjonuMtcc-MXfWGD11wLh-val",
//     "aeMjonuMtcc-P5jMO9Y0SRn-val",
//     "aeMjonuMtcc-eWjpUQpzWKX-val",
//     "aeMjonuMtcc-hC2N9T8F5JD-val",
//     "aeMjonuMtcc-xgbBSeyiDWp-val",
//     "aeMjonuMtcc-IhnQTXo2sCi-val",
//     "aeMjonuMtcc-rEUC186wftQ-val",
//     "aeMjonuMtcc-s5mo8EjeKiY-val",
//     "aeMjonuMtcc-ADfCJWnnU2O-val",
//     "eAYthjFSqFp-bj9TvyIDtwi-val",
//     "eAYthjFSqFp-lcB0UtS4nuB-val",
//     "eAYthjFSqFp-LvGn3KFEzvA-val",
//     "eAYthjFSqFp-wcnRf5LJrnK-val",
//     "eAYthjFSqFp-MXfWGD11wLh-val",
//     "eAYthjFSqFp-P5jMO9Y0SRn-val",
//     "eAYthjFSqFp-eWjpUQpzWKX-val",
//     "eAYthjFSqFp-hC2N9T8F5JD-val",
//     "eAYthjFSqFp-xgbBSeyiDWp-val",
//     "eAYthjFSqFp-IhnQTXo2sCi-val",
//     "eAYthjFSqFp-rEUC186wftQ-val",
//     "eAYthjFSqFp-s5mo8EjeKiY-val",
//     "eAYthjFSqFp-ADfCJWnnU2O-val",
//     "OdzBeCJucrN-bj9TvyIDtwi-val",
//     "OdzBeCJucrN-lcB0UtS4nuB-val",
//     "OdzBeCJucrN-LvGn3KFEzvA-val",
//     "OdzBeCJucrN-wcnRf5LJrnK-val",
//     "OdzBeCJucrN-MXfWGD11wLh-val",
//     "OdzBeCJucrN-P5jMO9Y0SRn-val",
//     "OdzBeCJucrN-eWjpUQpzWKX-val",
//     "OdzBeCJucrN-hC2N9T8F5JD-val",
//     "OdzBeCJucrN-xgbBSeyiDWp-val",
//     "OdzBeCJucrN-IhnQTXo2sCi-val",
//     "OdzBeCJucrN-rEUC186wftQ-val",
//     "OdzBeCJucrN-s5mo8EjeKiY-val",
//     "OdzBeCJucrN-ADfCJWnnU2O-val",
//     "twyiCdF4gkw-bj9TvyIDtwi-val",
//     "twyiCdF4gkw-lcB0UtS4nuB-val",
//     "twyiCdF4gkw-LvGn3KFEzvA-val",
//     "twyiCdF4gkw-wcnRf5LJrnK-val",
//     "twyiCdF4gkw-MXfWGD11wLh-val",
//     "twyiCdF4gkw-P5jMO9Y0SRn-val",
//     "twyiCdF4gkw-eWjpUQpzWKX-val",
//     "twyiCdF4gkw-hC2N9T8F5JD-val",
//     "twyiCdF4gkw-xgbBSeyiDWp-val",
//     "twyiCdF4gkw-IhnQTXo2sCi-val",
//     "twyiCdF4gkw-rEUC186wftQ-val",
//     "twyiCdF4gkw-s5mo8EjeKiY-val",
//     "twyiCdF4gkw-ADfCJWnnU2O-val",
//     "I68Gt1LWnKY-bj9TvyIDtwi-val",
//     "I68Gt1LWnKY-lcB0UtS4nuB-val",
//     "I68Gt1LWnKY-LvGn3KFEzvA-val",
//     "I68Gt1LWnKY-wcnRf5LJrnK-val",
//     "I68Gt1LWnKY-MXfWGD11wLh-val",
//     "I68Gt1LWnKY-P5jMO9Y0SRn-val",
//     "I68Gt1LWnKY-eWjpUQpzWKX-val",
//     "I68Gt1LWnKY-hC2N9T8F5JD-val",
//     "I68Gt1LWnKY-xgbBSeyiDWp-val",
//     "I68Gt1LWnKY-IhnQTXo2sCi-val",
//     "I68Gt1LWnKY-rEUC186wftQ-val",
//     "I68Gt1LWnKY-s5mo8EjeKiY-val",
//     "I68Gt1LWnKY-ADfCJWnnU2O-val",
//     "t91xdLaqfu2-bj9TvyIDtwi-val",
//     "t91xdLaqfu2-lcB0UtS4nuB-val",
//     "t91xdLaqfu2-LvGn3KFEzvA-val",
//     "t91xdLaqfu2-wcnRf5LJrnK-val",
//     "t91xdLaqfu2-MXfWGD11wLh-val",
//     "t91xdLaqfu2-P5jMO9Y0SRn-val",
//     "t91xdLaqfu2-eWjpUQpzWKX-val",
//     "t91xdLaqfu2-hC2N9T8F5JD-val",
//     "t91xdLaqfu2-xgbBSeyiDWp-val",
//     "t91xdLaqfu2-IhnQTXo2sCi-val",
//     "t91xdLaqfu2-rEUC186wftQ-val",
//     "t91xdLaqfu2-s5mo8EjeKiY-val",
//     "t91xdLaqfu2-ADfCJWnnU2O-val",
//     "uNhNf1HB1TH-bj9TvyIDtwi-val",
//     "uNhNf1HB1TH-lcB0UtS4nuB-val",
//     "uNhNf1HB1TH-LvGn3KFEzvA-val",
//     "uNhNf1HB1TH-wcnRf5LJrnK-val",
//     "uNhNf1HB1TH-MXfWGD11wLh-val",
//     "uNhNf1HB1TH-P5jMO9Y0SRn-val",
//     "uNhNf1HB1TH-eWjpUQpzWKX-val",
//     "uNhNf1HB1TH-hC2N9T8F5JD-val",
//     "uNhNf1HB1TH-xgbBSeyiDWp-val",
//     "uNhNf1HB1TH-IhnQTXo2sCi-val",
//     "uNhNf1HB1TH-rEUC186wftQ-val",
//     "uNhNf1HB1TH-s5mo8EjeKiY-val",
//     "uNhNf1HB1TH-ADfCJWnnU2O-val",
//     "B6byh3I2gLZ-bj9TvyIDtwi-val",
//     "B6byh3I2gLZ-lcB0UtS4nuB-val",
//     "B6byh3I2gLZ-LvGn3KFEzvA-val",
//     "B6byh3I2gLZ-wcnRf5LJrnK-val",
//     "B6byh3I2gLZ-MXfWGD11wLh-val",
//     "B6byh3I2gLZ-P5jMO9Y0SRn-val",
//     "B6byh3I2gLZ-eWjpUQpzWKX-val",
//     "B6byh3I2gLZ-hC2N9T8F5JD-val",
//     "B6byh3I2gLZ-xgbBSeyiDWp-val",
//     "B6byh3I2gLZ-IhnQTXo2sCi-val",
//     "B6byh3I2gLZ-rEUC186wftQ-val",
//     "B6byh3I2gLZ-s5mo8EjeKiY-val",
//     "B6byh3I2gLZ-ADfCJWnnU2O-val",
//     "P32Zj6UH2Gp-bj9TvyIDtwi-val",
//     "P32Zj6UH2Gp-lcB0UtS4nuB-val",
//     "P32Zj6UH2Gp-LvGn3KFEzvA-val",
//     "P32Zj6UH2Gp-wcnRf5LJrnK-val",
//     "P32Zj6UH2Gp-MXfWGD11wLh-val",
//     "P32Zj6UH2Gp-P5jMO9Y0SRn-val",
//     "P32Zj6UH2Gp-eWjpUQpzWKX-val",
//     "P32Zj6UH2Gp-hC2N9T8F5JD-val",
//     "P32Zj6UH2Gp-xgbBSeyiDWp-val",
//     "P32Zj6UH2Gp-IhnQTXo2sCi-val",
//     "P32Zj6UH2Gp-rEUC186wftQ-val",
//     "P32Zj6UH2Gp-s5mo8EjeKiY-val",
//     "P32Zj6UH2Gp-ADfCJWnnU2O-val",
//     "YatI9LfufnA-bj9TvyIDtwi-val",
//     "YatI9LfufnA-lcB0UtS4nuB-val",
//     "YatI9LfufnA-LvGn3KFEzvA-val",
//     "YatI9LfufnA-wcnRf5LJrnK-val",
//     "YatI9LfufnA-MXfWGD11wLh-val",
//     "YatI9LfufnA-P5jMO9Y0SRn-val",
//     "YatI9LfufnA-eWjpUQpzWKX-val",
//     "YatI9LfufnA-hC2N9T8F5JD-val",
//     "YatI9LfufnA-xgbBSeyiDWp-val",
//     "YatI9LfufnA-IhnQTXo2sCi-val",
//     "YatI9LfufnA-rEUC186wftQ-val",
//     "YatI9LfufnA-s5mo8EjeKiY-val",
//     "YatI9LfufnA-ADfCJWnnU2O-val",
//     "zA03t1uZJVd-bj9TvyIDtwi-val",
//     "zA03t1uZJVd-lcB0UtS4nuB-val",
//     "zA03t1uZJVd-LvGn3KFEzvA-val",
//     "zA03t1uZJVd-wcnRf5LJrnK-val",
//     "zA03t1uZJVd-MXfWGD11wLh-val",
//     "zA03t1uZJVd-P5jMO9Y0SRn-val",
//     "zA03t1uZJVd-eWjpUQpzWKX-val",
//     "zA03t1uZJVd-hC2N9T8F5JD-val",
//     "zA03t1uZJVd-xgbBSeyiDWp-val",
//     "zA03t1uZJVd-IhnQTXo2sCi-val",
//     "zA03t1uZJVd-rEUC186wftQ-val",
//     "zA03t1uZJVd-s5mo8EjeKiY-val",
//     "zA03t1uZJVd-ADfCJWnnU2O-val",
//     "vaqogvYkQmk-bj9TvyIDtwi-val",
//     "vaqogvYkQmk-lcB0UtS4nuB-val",
//     "vaqogvYkQmk-LvGn3KFEzvA-val",
//     "vaqogvYkQmk-wcnRf5LJrnK-val",
//     "vaqogvYkQmk-MXfWGD11wLh-val",
//     "vaqogvYkQmk-P5jMO9Y0SRn-val",
//     "vaqogvYkQmk-eWjpUQpzWKX-val",
//     "vaqogvYkQmk-hC2N9T8F5JD-val",
//     "vaqogvYkQmk-xgbBSeyiDWp-val",
//     "vaqogvYkQmk-IhnQTXo2sCi-val",
//     "vaqogvYkQmk-rEUC186wftQ-val",
//     "vaqogvYkQmk-s5mo8EjeKiY-val",
//     "vaqogvYkQmk-ADfCJWnnU2O-val",
//     "iRQNn3DPrCd-bj9TvyIDtwi-val",
//     "iRQNn3DPrCd-lcB0UtS4nuB-val",
//     "iRQNn3DPrCd-LvGn3KFEzvA-val",
//     "iRQNn3DPrCd-wcnRf5LJrnK-val",
//     "iRQNn3DPrCd-MXfWGD11wLh-val",
//     "iRQNn3DPrCd-P5jMO9Y0SRn-val",
//     "iRQNn3DPrCd-eWjpUQpzWKX-val",
//     "iRQNn3DPrCd-hC2N9T8F5JD-val",
//     "iRQNn3DPrCd-xgbBSeyiDWp-val",
//     "iRQNn3DPrCd-IhnQTXo2sCi-val",
//     "iRQNn3DPrCd-rEUC186wftQ-val",
//     "iRQNn3DPrCd-s5mo8EjeKiY-val",
//     "iRQNn3DPrCd-ADfCJWnnU2O-val",
//     "jrLCQmv8GL5-bj9TvyIDtwi-val",
//     "jrLCQmv8GL5-lcB0UtS4nuB-val",
//     "jrLCQmv8GL5-LvGn3KFEzvA-val",
//     "jrLCQmv8GL5-wcnRf5LJrnK-val",
//     "jrLCQmv8GL5-MXfWGD11wLh-val",
//     "jrLCQmv8GL5-P5jMO9Y0SRn-val",
//     "jrLCQmv8GL5-eWjpUQpzWKX-val",
//     "jrLCQmv8GL5-hC2N9T8F5JD-val",
//     "jrLCQmv8GL5-xgbBSeyiDWp-val",
//     "jrLCQmv8GL5-IhnQTXo2sCi-val",
//     "jrLCQmv8GL5-rEUC186wftQ-val",
//     "jrLCQmv8GL5-s5mo8EjeKiY-val",
//     "jrLCQmv8GL5-ADfCJWnnU2O-val",
//     "kNg3s5dolnv-bj9TvyIDtwi-val",
//     "kNg3s5dolnv-lcB0UtS4nuB-val",
//     "kNg3s5dolnv-LvGn3KFEzvA-val",
//     "kNg3s5dolnv-wcnRf5LJrnK-val",
//     "kNg3s5dolnv-MXfWGD11wLh-val",
//     "kNg3s5dolnv-P5jMO9Y0SRn-val",
//     "kNg3s5dolnv-eWjpUQpzWKX-val",
//     "kNg3s5dolnv-hC2N9T8F5JD-val",
//     "kNg3s5dolnv-xgbBSeyiDWp-val",
//     "kNg3s5dolnv-IhnQTXo2sCi-val",
//     "kNg3s5dolnv-rEUC186wftQ-val",
//     "kNg3s5dolnv-s5mo8EjeKiY-val",
//     "kNg3s5dolnv-ADfCJWnnU2O-val",
//     "fh0rJ4e7SQS-bj9TvyIDtwi-val",
//     "fh0rJ4e7SQS-lcB0UtS4nuB-val",
//     "fh0rJ4e7SQS-LvGn3KFEzvA-val",
//     "fh0rJ4e7SQS-wcnRf5LJrnK-val",
//     "fh0rJ4e7SQS-MXfWGD11wLh-val",
//     "fh0rJ4e7SQS-P5jMO9Y0SRn-val",
//     "fh0rJ4e7SQS-eWjpUQpzWKX-val",
//     "fh0rJ4e7SQS-hC2N9T8F5JD-val",
//     "fh0rJ4e7SQS-xgbBSeyiDWp-val",
//     "fh0rJ4e7SQS-IhnQTXo2sCi-val",
//     "fh0rJ4e7SQS-rEUC186wftQ-val",
//     "fh0rJ4e7SQS-s5mo8EjeKiY-val",
//     "fh0rJ4e7SQS-ADfCJWnnU2O-val",
//     "mHS0dvMe8Ci-bj9TvyIDtwi-val",
//     "mHS0dvMe8Ci-lcB0UtS4nuB-val",
//     "mHS0dvMe8Ci-LvGn3KFEzvA-val",
//     "mHS0dvMe8Ci-wcnRf5LJrnK-val",
//     "mHS0dvMe8Ci-MXfWGD11wLh-val",
//     "mHS0dvMe8Ci-P5jMO9Y0SRn-val",
//     "mHS0dvMe8Ci-eWjpUQpzWKX-val",
//     "mHS0dvMe8Ci-hC2N9T8F5JD-val",
//     "mHS0dvMe8Ci-xgbBSeyiDWp-val",
//     "mHS0dvMe8Ci-IhnQTXo2sCi-val",
//     "mHS0dvMe8Ci-rEUC186wftQ-val",
//     "mHS0dvMe8Ci-s5mo8EjeKiY-val",
//     "mHS0dvMe8Ci-ADfCJWnnU2O-val",
//     "Jcid9lkzapy-bj9TvyIDtwi-val",
//     "Jcid9lkzapy-lcB0UtS4nuB-val",
//     "Jcid9lkzapy-LvGn3KFEzvA-val",
//     "Jcid9lkzapy-wcnRf5LJrnK-val",
//     "Jcid9lkzapy-MXfWGD11wLh-val",
//     "Jcid9lkzapy-P5jMO9Y0SRn-val",
//     "Jcid9lkzapy-eWjpUQpzWKX-val",
//     "Jcid9lkzapy-hC2N9T8F5JD-val",
//     "Jcid9lkzapy-xgbBSeyiDWp-val",
//     "Jcid9lkzapy-IhnQTXo2sCi-val",
//     "Jcid9lkzapy-rEUC186wftQ-val",
//     "Jcid9lkzapy-s5mo8EjeKiY-val",
//     "Jcid9lkzapy-ADfCJWnnU2O-val",
//     "Q55SREINwd5-bj9TvyIDtwi-val",
//     "Q55SREINwd5-lcB0UtS4nuB-val",
//     "Q55SREINwd5-LvGn3KFEzvA-val",
//     "Q55SREINwd5-wcnRf5LJrnK-val",
//     "Q55SREINwd5-MXfWGD11wLh-val",
//     "Q55SREINwd5-P5jMO9Y0SRn-val",
//     "Q55SREINwd5-eWjpUQpzWKX-val",
//     "Q55SREINwd5-hC2N9T8F5JD-val",
//     "Q55SREINwd5-xgbBSeyiDWp-val",
//     "Q55SREINwd5-IhnQTXo2sCi-val",
//     "Q55SREINwd5-rEUC186wftQ-val",
//     "Q55SREINwd5-s5mo8EjeKiY-val",
//     "Q55SREINwd5-ADfCJWnnU2O-val",
//     "DCTZJXnTJYh-bj9TvyIDtwi-val",
//     "DCTZJXnTJYh-lcB0UtS4nuB-val",
//     "DCTZJXnTJYh-LvGn3KFEzvA-val",
//     "DCTZJXnTJYh-wcnRf5LJrnK-val",
//     "DCTZJXnTJYh-MXfWGD11wLh-val",
//     "DCTZJXnTJYh-P5jMO9Y0SRn-val",
//     "DCTZJXnTJYh-eWjpUQpzWKX-val",
//     "DCTZJXnTJYh-hC2N9T8F5JD-val",
//     "DCTZJXnTJYh-xgbBSeyiDWp-val",
//     "DCTZJXnTJYh-IhnQTXo2sCi-val",
//     "DCTZJXnTJYh-rEUC186wftQ-val",
//     "DCTZJXnTJYh-s5mo8EjeKiY-val",
//     "DCTZJXnTJYh-ADfCJWnnU2O-val",
//     "RJoEQfGuiU2-bj9TvyIDtwi-val",
//     "RJoEQfGuiU2-lcB0UtS4nuB-val",
//     "RJoEQfGuiU2-LvGn3KFEzvA-val",
//     "RJoEQfGuiU2-wcnRf5LJrnK-val",
//     "RJoEQfGuiU2-MXfWGD11wLh-val",
//     "RJoEQfGuiU2-P5jMO9Y0SRn-val",
//     "RJoEQfGuiU2-eWjpUQpzWKX-val",
//     "RJoEQfGuiU2-hC2N9T8F5JD-val",
//     "RJoEQfGuiU2-xgbBSeyiDWp-val",
//     "RJoEQfGuiU2-IhnQTXo2sCi-val",
//     "RJoEQfGuiU2-rEUC186wftQ-val",
//     "RJoEQfGuiU2-s5mo8EjeKiY-val",
//     "RJoEQfGuiU2-ADfCJWnnU2O-val",
//     "Hqx5zSgskDT-bj9TvyIDtwi-val",
//     "Hqx5zSgskDT-lcB0UtS4nuB-val",
//     "Hqx5zSgskDT-LvGn3KFEzvA-val",
//     "Hqx5zSgskDT-wcnRf5LJrnK-val",
//     "Hqx5zSgskDT-MXfWGD11wLh-val",
//     "Hqx5zSgskDT-P5jMO9Y0SRn-val",
//     "Hqx5zSgskDT-eWjpUQpzWKX-val",
//     "Hqx5zSgskDT-hC2N9T8F5JD-val",
//     "Hqx5zSgskDT-xgbBSeyiDWp-val",
//     "Hqx5zSgskDT-IhnQTXo2sCi-val",
//     "Hqx5zSgskDT-rEUC186wftQ-val",
//     "Hqx5zSgskDT-s5mo8EjeKiY-val",
//     "Hqx5zSgskDT-ADfCJWnnU2O-val",
//     "uVm3QiiqWy5-bj9TvyIDtwi-val",
//     "uVm3QiiqWy5-lcB0UtS4nuB-val",
//     "uVm3QiiqWy5-LvGn3KFEzvA-val",
//     "uVm3QiiqWy5-wcnRf5LJrnK-val",
//     "uVm3QiiqWy5-MXfWGD11wLh-val",
//     "uVm3QiiqWy5-P5jMO9Y0SRn-val",
//     "uVm3QiiqWy5-eWjpUQpzWKX-val",
//     "uVm3QiiqWy5-hC2N9T8F5JD-val",
//     "uVm3QiiqWy5-xgbBSeyiDWp-val",
//     "uVm3QiiqWy5-IhnQTXo2sCi-val",
//     "uVm3QiiqWy5-rEUC186wftQ-val",
//     "uVm3QiiqWy5-s5mo8EjeKiY-val",
//     "uVm3QiiqWy5-ADfCJWnnU2O-val",
//     "PpUeJpIdiWo-bj9TvyIDtwi-val",
//     "PpUeJpIdiWo-lcB0UtS4nuB-val",
//     "PpUeJpIdiWo-LvGn3KFEzvA-val",
//     "PpUeJpIdiWo-wcnRf5LJrnK-val",
//     "PpUeJpIdiWo-MXfWGD11wLh-val",
//     "PpUeJpIdiWo-P5jMO9Y0SRn-val",
//     "PpUeJpIdiWo-eWjpUQpzWKX-val",
//     "PpUeJpIdiWo-hC2N9T8F5JD-val",
//     "PpUeJpIdiWo-xgbBSeyiDWp-val",
//     "PpUeJpIdiWo-IhnQTXo2sCi-val",
//     "PpUeJpIdiWo-rEUC186wftQ-val",
//     "PpUeJpIdiWo-s5mo8EjeKiY-val",
//     "PpUeJpIdiWo-ADfCJWnnU2O-val",
//     "phb9zYIatb6-bj9TvyIDtwi-val",
//     "phb9zYIatb6-lcB0UtS4nuB-val",
//     "phb9zYIatb6-LvGn3KFEzvA-val",
//     "phb9zYIatb6-wcnRf5LJrnK-val",
//     "phb9zYIatb6-MXfWGD11wLh-val",
//     "phb9zYIatb6-P5jMO9Y0SRn-val",
//     "phb9zYIatb6-eWjpUQpzWKX-val",
//     "phb9zYIatb6-hC2N9T8F5JD-val",
//     "phb9zYIatb6-xgbBSeyiDWp-val",
//     "phb9zYIatb6-IhnQTXo2sCi-val",
//     "phb9zYIatb6-rEUC186wftQ-val",
//     "phb9zYIatb6-s5mo8EjeKiY-val",
//     "phb9zYIatb6-ADfCJWnnU2O-val",
//     "IN7lO4uq9Bc-bj9TvyIDtwi-val",
//     "IN7lO4uq9Bc-lcB0UtS4nuB-val",
//     "IN7lO4uq9Bc-LvGn3KFEzvA-val",
//     "IN7lO4uq9Bc-wcnRf5LJrnK-val",
//     "IN7lO4uq9Bc-MXfWGD11wLh-val",
//     "IN7lO4uq9Bc-P5jMO9Y0SRn-val",
//     "IN7lO4uq9Bc-eWjpUQpzWKX-val",
//     "IN7lO4uq9Bc-hC2N9T8F5JD-val",
//     "IN7lO4uq9Bc-xgbBSeyiDWp-val",
//     "IN7lO4uq9Bc-IhnQTXo2sCi-val",
//     "IN7lO4uq9Bc-rEUC186wftQ-val",
//     "IN7lO4uq9Bc-s5mo8EjeKiY-val",
//     "IN7lO4uq9Bc-ADfCJWnnU2O-val",
//     "nfuT0F8dooN-bj9TvyIDtwi-val",
//     "nfuT0F8dooN-lcB0UtS4nuB-val",
//     "nfuT0F8dooN-LvGn3KFEzvA-val",
//     "nfuT0F8dooN-wcnRf5LJrnK-val",
//     "nfuT0F8dooN-MXfWGD11wLh-val",
//     "nfuT0F8dooN-P5jMO9Y0SRn-val",
//     "nfuT0F8dooN-eWjpUQpzWKX-val",
//     "nfuT0F8dooN-hC2N9T8F5JD-val",
//     "nfuT0F8dooN-xgbBSeyiDWp-val",
//     "nfuT0F8dooN-IhnQTXo2sCi-val",
//     "nfuT0F8dooN-rEUC186wftQ-val",
//     "nfuT0F8dooN-s5mo8EjeKiY-val",
//     "nfuT0F8dooN-ADfCJWnnU2O-val",
//     "sUiSZuo91xH-bj9TvyIDtwi-val",
//     "sUiSZuo91xH-lcB0UtS4nuB-val",
//     "sUiSZuo91xH-LvGn3KFEzvA-val",
//     "sUiSZuo91xH-wcnRf5LJrnK-val",
//     "sUiSZuo91xH-MXfWGD11wLh-val",
//     "sUiSZuo91xH-P5jMO9Y0SRn-val",
//     "sUiSZuo91xH-eWjpUQpzWKX-val",
//     "sUiSZuo91xH-hC2N9T8F5JD-val",
//     "sUiSZuo91xH-xgbBSeyiDWp-val",
//     "sUiSZuo91xH-IhnQTXo2sCi-val",
//     "sUiSZuo91xH-rEUC186wftQ-val",
//     "sUiSZuo91xH-s5mo8EjeKiY-val",
//     "sUiSZuo91xH-ADfCJWnnU2O-val",
//     "gblhg0b0SBl-bj9TvyIDtwi-val",
//     "gblhg0b0SBl-lcB0UtS4nuB-val",
//     "gblhg0b0SBl-LvGn3KFEzvA-val",
//     "gblhg0b0SBl-wcnRf5LJrnK-val",
//     "gblhg0b0SBl-MXfWGD11wLh-val",
//     "gblhg0b0SBl-P5jMO9Y0SRn-val",
//     "gblhg0b0SBl-eWjpUQpzWKX-val",
//     "gblhg0b0SBl-hC2N9T8F5JD-val",
//     "gblhg0b0SBl-xgbBSeyiDWp-val",
//     "gblhg0b0SBl-IhnQTXo2sCi-val",
//     "gblhg0b0SBl-rEUC186wftQ-val",
//     "gblhg0b0SBl-s5mo8EjeKiY-val",
//     "gblhg0b0SBl-ADfCJWnnU2O-val",
//     "Am3lKzfuLds-bj9TvyIDtwi-val",
//     "Am3lKzfuLds-lcB0UtS4nuB-val",
//     "Am3lKzfuLds-LvGn3KFEzvA-val",
//     "Am3lKzfuLds-wcnRf5LJrnK-val",
//     "Am3lKzfuLds-MXfWGD11wLh-val",
//     "Am3lKzfuLds-P5jMO9Y0SRn-val",
//     "Am3lKzfuLds-eWjpUQpzWKX-val",
//     "Am3lKzfuLds-hC2N9T8F5JD-val",
//     "Am3lKzfuLds-xgbBSeyiDWp-val",
//     "Am3lKzfuLds-IhnQTXo2sCi-val",
//     "Am3lKzfuLds-rEUC186wftQ-val",
//     "Am3lKzfuLds-s5mo8EjeKiY-val",
//     "Am3lKzfuLds-ADfCJWnnU2O-val"
// ]

// const full = dataElementGroups.map ((deg,groupIndex )=> {
//     return {...deg, inputCheckboxes: deg.inputCheckboxes.map( (check,checkIndex) => {
//         return {...check, id: checkBoxes[checkIndex + (13*groupIndex)]}
//     })}
// })

// const fullJson = JSON.stringify(dataElementGroups.map ((deg,groupIndex )=> {
//     return {...deg, inputCheckboxes: deg.inputCheckboxes.map( (check,checkIndex) => {
//         return {...check, id: checkBoxes[checkIndex + (13*groupIndex)]}
//     })}
// }))

