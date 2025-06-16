import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'willow-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css'],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
})
export class UploadFormComponent {
  circlePlusIcon = faPlusCircle;
}
