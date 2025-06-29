import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularWillowComponent } from './angular-willow.component';
import { ColorSwatchComponent } from './color-swatch/color-swatch.component';
import { TableComponent } from './table/table.component';
import { ThreadedMessageComponent } from './threaded-message/threaded-message.component';
import { ThreadedMessagesListComponent } from './threaded-messages-list/threaded-messages-list.component';
import { TypographyComponent } from './typography/typography.component';
import { UploadFormComponent } from './upload-form/upload-form.component';

import { FormInputComponent } from './form-input/form-input.component';
import { FormCheckboxComponent } from './form-checkbox/form-checkbox.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormTextareaComponent } from './form-textarea/form-textarea.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardComponent } from './card/card.component';


@NgModule({
    imports: [
        CommonModule,

    FontAwesomeModule,
    AngularWillowComponent,
        ThreadedMessagesListComponent,
        ThreadedMessageComponent,
        TypographyComponent,
        ColorSwatchComponent,
        TableComponent,
    UploadFormComponent,
    FormInputComponent,
    FormCheckboxComponent,
    FormSelectComponent,
    FormTextareaComponent,
    AlertComponent,
    ButtonComponent,
    CardComponent,

    ],
    exports: [
        AngularWillowComponent,
        ThreadedMessagesListComponent,
        ThreadedMessageComponent,
        TypographyComponent,
        ColorSwatchComponent,
        TableComponent,
    UploadFormComponent,
    FormInputComponent,
    FormCheckboxComponent,
    FormSelectComponent,
    FormTextareaComponent,
    AlertComponent,
    ButtonComponent,
        CardComponent,
    ],

})
export class AngularWillowModule {}
