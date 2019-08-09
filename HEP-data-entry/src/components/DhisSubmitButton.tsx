import { createElement } from "typed-html";

export function DhisSubmitButton() {
    return (
        <div
            id="completenessDivCustom"
            class="page inputCriteria"
            style="display: block; margin-top: 15px; width: 430px"
        >
            <input
                type="button"
                id="completeButton"
                name="completeButton"
                value="Submit: Check data consistency"
                onclick="dhis2.de.validate( false ); registerCompleteDataSet()"
                style="width:225px; margin-right:5px"
            />
            <input
                type="button"
                id="cancelButton"
                name="cancelButton"
                value="Go back to home page"
                onclick="history.back()"
                style="width:175px; margin-left:5px"
            />
        </div>
    );
}
