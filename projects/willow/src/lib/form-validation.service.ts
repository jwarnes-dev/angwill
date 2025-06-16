import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

export interface ErrorMessagesConfig {
  [controlName: string]: {
    required?: string;
    invalid?: string;
  };
}

export interface ValidationMessage {
  controlName: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class FormValidationService {
  /**
   * Iterates through all controls in a FormGroup and generates a message list
   * based on the provided error message configuration.
   */
  validateForm(
    form: FormGroup,
    errorMessages: ErrorMessagesConfig
  ): ValidationMessage[] {
    const messages: ValidationMessage[] = [];

    Object.keys(form.controls).forEach((controlName) => {
      const control = form.controls[controlName];
      if (control.invalid) {
        const errors = control.errors || {};
        if (errors['required'] && errorMessages?.[controlName]?.required) {
          messages.push({
            controlName,
            message: errorMessages[controlName].required as string,
          });
        } else if (errorMessages?.[controlName]?.invalid) {
          messages.push({
            controlName,
            message: errorMessages[controlName].invalid as string,
          });
        } else {
          // Fallback generic message
          messages.push({
            controlName,
            message: 'Invalid value',
          });
        }
      }
    });

    return messages;
  }

  /**
   * Attempts to focus the first HTML element that is bound to the specified form control name.
   */
  focusControl(controlName: string): void {
    const el = document.querySelector<HTMLElement>(
      `[formcontrolname="${controlName}"]`
    );
    el?.focus();
  }
} 