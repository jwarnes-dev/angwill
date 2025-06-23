import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'willow-radio',
    imports: [FontAwesomeModule, ReactiveFormsModule, CommonModule],
    standalone: true,
    templateUrl: './form-radio.component.html',
    styleUrl: './form-radio.component.scss',
})
export class FormRadioComponent {
    label = input<string>('');
    control = input.required<FormControl>();
    required = input<boolean>(false);
    errorText = input<string>('Please enter a value');
    showErrors = input<boolean>(false);
    options = input<string[]>([]);
    hint = input<string>('');

    warningIcon = faTriangleExclamation;

    ngOnInit(): void {
        if (!this.control) {
            throw new Error('FormRadioComponent requires a FormControl instance via [control] input.');
        }
    }
}
