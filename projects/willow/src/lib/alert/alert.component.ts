import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ValidationMessage } from '../form-validation.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'willow-alert',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <div class="wl-alert error" *ngIf="messages?.length">
      <div
        class="alert-row"
        *ngFor="let msg of messages; index as i"
        (click)="onMessageClick(msg)"
      >
        <fa-icon [icon]="warningIcon" class="icon"></fa-icon>
        <div class="msg">
          <div>Correct the following error(s)</div>
          <span class="body">{{ msg.message }}</span>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .wl-alert {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: var(--spacing-willow-16, 16px);
        padding: var(--spacing-willow-24, 24px);
        width: 100%;
        cursor: pointer;
        border-left: 4px solid var(--component-alerts-warning-highlight, #ffc345);
        border-radius: 0px var(--corner-radius-willow-default, 2px) var(--corner-radius-willow-default, 2px) 0px;
        background: 
        var(--component-alerts-warning-fill, #FFFAEE);
      }

      .wl-alert.error {
        border-left: 4px solid var(--component-alerts-error-highlight, #B44242);
        background: var(--component-alerts-error-fill, #FFF5F5);
      }

      .wl-alert.error .icon {
        color: var(--component-alerts-error-highlight, #B44242);
      }
      .alert-row {
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .icon {
        color: var(--component-alerts-warning-highlight, #ffc345);
        font-size: 24px;
        font-family: 'Font Awesome 6 Pro';
        font-weight: 900;
      }
      .msg {
        color: var(--text-color-gray---default, #4b4c4d);
        font-size: 18px;
        font-family: Roboto;
        font-weight: 700;
        line-height: 20px;
        margin-left: 8px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Input() messages: ValidationMessage[] = [];
  @Output() messageClick = new EventEmitter<ValidationMessage>();

  warningIcon = faTriangleExclamation;

  onMessageClick(msg: ValidationMessage): void {
    this.messageClick.emit(msg);
  }
} 