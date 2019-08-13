import { createElement } from "typed-html";

/**
 * Submit buttons
 * 
 * NOTE: Client has removed the "complete" feature for data sets.
 * To re-enable it, create a "completeButton" that executes "registerCompleteDataSet()".
 */
export function DhisSubmitButton() {
    return (
        <div>
            <div
                id="validationDivCustom"
                class="page inputCriteria"
                style="display: flex; margin-top: 15px; width: 430px; padding:15px"
            >
                <input
                    type="button"
                    id="validateButton"
                    value="Submit: Check data consistency"
                    onclick="dhis2.de.validate(false)"
                    style="margin-left:5px; margin-right:5px; flex-grow:2"
                />
                <input
                    type="button"
                    id="cancelButton"
                    name="cancelButton"
                    value="Go back to home page"
                    onclick="history.back()"
                    style="margin-left:5px; margin-right:5px; flex-grow:1"
                />
                </div>
            <div
                id="completenessDivCustom"
                class="page inputCriteria"
                style="display: flex; margin-top: 15px; width: 430px; padding:15px"
            >
                <input
                    type="button"
                    id="completeButton"
                    name="completeButton"
                    value="Complete"
                    onclick="registerCompleteDataSet()"
                    style="margin-left:5px; margin-right:5px; flex-grow:1"
                />
                <input
                    type="button"
                    id="undoButton"
                    name="undoButton"
                    value="Incomplete"
                    onclick="undoCompleteDataSet()"
                    style="margin-left:5px; margin-right:5px; flex-grow:1"
                />
            </div>
        </div>
    );
}
