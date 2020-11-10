import { ERROR_MESSAGES } from "../constants/constants.js";

export default class SearchInput {
    constructor(input, button, error){
        this.input = input;
    this.button = button;
    this.error = error;
    }
    checkInputValidity() {
        if (this.input.validity.valueMissing) {
          this.input.setCustomValidity(ERROR_MESSAGES.valueMissing);
          this.setSubmitButtonState(false);
        } else if (this.input.validity.tooShort) {
          this.input.setCustomValidity(ERROR_MESSAGES.tooShort);
          this.setSubmitButtonState(false);
        } else {
          this.input.setCustomValidity("");
          this.setSubmitButtonState(true);
        }
        this.error.textContent = this.input.validationMessage;
      }
      setSubmitButtonState(state) {
        if (state) {
          this.button.removeAttribute("disabled");
        } else {
          this.button.setAttribute("disabled", true);
        }
      }    
}