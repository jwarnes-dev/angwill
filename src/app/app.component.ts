import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThreadedMessage } from '../../dist/willow';
import { ThreadedMessagesListComponent } from '../../projects/willow/src/public-api';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { FormInputComponent } from '../../projects/willow/src/lib/form-input/form-input.component';
import { FormSelectComponent, SelectOption } from '../../projects/willow/src/lib/form-select/form-select.component';
import { FormTextareaComponent } from '../../projects/willow/src/lib/form-textarea/form-textarea.component';
import { FormCheckboxComponent, CheckboxOption } from '../../projects/willow/src/lib/form-checkbox/form-checkbox.component';
import { AlertComponent } from '../../projects/willow/src/lib/alert/alert.component';
import { FormValidationService, ErrorMessagesConfig, ValidationMessage } from '../../projects/willow/src/lib/form-validation.service';
import { ButtonComponent } from '../../projects/willow/src/lib/button/button.component';
import { HeaderComponent } from './header.component';
import { MemberDetailsComponent } from './member-details.component';
import { UploadFormComponent } from '../../projects/willow/src/lib/upload-form/upload-form.component';


@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    ThreadedMessagesListComponent,
    ReactiveFormsModule,
    FormInputComponent,
    FormSelectComponent,
    FormTextareaComponent,
    FormCheckboxComponent,
    AlertComponent,
    ButtonComponent,
    HeaderComponent,
    MemberDetailsComponent,
    UploadFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(
    private fb: FormBuilder,
    private validator: FormValidationService
  ) {
    this.form = this.fb.group({
      test: ['', Validators.required],
      group1: [null, Validators.required],
      textarea: ['', Validators.required],
      checkGroup: this.fb.control<any[]>([], Validators.required),
    });

    // Initialize reply form
    this.replyForm = this.fb.group({
      message: ['', Validators.required]
    });
  }

  title = '@wellmark/angular-willow';
  threadedMessages: ThreadedMessage[] = [
    {
      name: 'John Doe',
      date: '02/02/2025',
      text: 'This is the first message',
      isRepresentative: false,
      correspondence: '12345'
    },
    {
      name: 'Wellmark Representative',
      date: '02/02/2025',
      text: 'This is the second message',
      isRepresentative: true,
      correspondence: '67890'
    }
  ]

  selectValues: SelectOption[] = [
    { id: 1, value: 'Value 1' },
    { id: 2, value: 'Value 2' }
  ];

  checkboxValues: CheckboxOption[] = [
    { id: 'a', value: 'Checkbox A' },
    { id: 'b', value: 'Checkbox B' }
  ];

  form!: FormGroup;
  showReplyForm = false;
  replyForm!: FormGroup;
  replySubmitted = false;
  replyAlertMessages: ValidationMessage[] = [];

  errorMessages: ErrorMessagesConfig = {
    test: {
      required: 'Please enter a value'
    },
    group1: {
      required: 'Please select a value'
    },
    textarea: {
      required: 'Please enter text'
    },
    checkGroup: {
      required: 'Please select at least one option'
    }
  };

  alertMessages: ValidationMessage[] = [];

  submitted = false;

  replyErrorMessages: ErrorMessagesConfig = {
    message: {
      required: 'Please enter your message'
    }
  };

  onSubmit() {
    this.submitted = true;
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      this.alertMessages = this.validator.validateForm(
        this.form,
        this.errorMessages
      );
    } else {
      this.alertMessages = [];
    }
  }

  focusField(msg: ValidationMessage) {
    this.validator.focusControl(msg.controlName);
  }

  showReply() {
    this.showReplyForm = true;
  }

  sendReply() {
    this.replySubmitted = true;
    this.replyForm.markAllAsTouched();
    
    if (this.replyForm.invalid) {
      this.replyAlertMessages = this.validator.validateForm(
        this.replyForm,
        this.replyErrorMessages
      );
    } else {
      this.replyAlertMessages = [];
      // Send reply to backend
      this.cancelReply();
    }
  }

  cancelReply() {
    this.showReplyForm = false;
    this.replyForm.reset();
    this.replySubmitted = false;
    this.replyAlertMessages = [];
  }

  focusReplyField(msg: ValidationMessage) {
    this.validator.focusControl(msg.controlName);
  }
}
