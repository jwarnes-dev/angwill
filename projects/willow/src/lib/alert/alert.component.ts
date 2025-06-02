import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ValidationMessage } from '../form-validation.service';

@Component({
  selector: 'willow-alert',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="wl-alert" *ngIf="messages?.length">
      <div
        class="alert-row"
        *ngFor="let msg of messages; index as i"
        (click)="onMessageClick(msg)"
      >
        <span class="icon">&#xf06a;</span>
        <div class="msg">{{ msg.message }}</div>
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
        background: var(--color-willow-blue---super-light, #f3f9ff);
        border-left: 4px solid var(--component-alerts-warning-highlight, #ffc345);
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
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Input() messages: ValidationMessage[] = [];
  @Output() messageClick = new EventEmitter<ValidationMessage>();

  onMessageClick(msg: ValidationMessage): void {
    this.messageClick.emit(msg);
  }
} 