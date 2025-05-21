import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ThreadedMessage } from '../models/threaded-message.model';

@Component({
  selector: 'willow-threaded-message',
  templateUrl: './threaded-message.component.html',
  imports: [
    CommonModule
  ],
  styleUrls: ['./threaded-message.component.scss'],

})
export class ThreadedMessageComponent {
  @Input() message!: ThreadedMessage;


  get displayName(): string {
    return this.message.isRepresentative ? 'Wellmark Representative' : this.message.name;
  }

  get isRepresentative(): boolean {
    return this.message.isRepresentative;
  }

  get hasAttachments(): boolean {
    return Boolean(this.message.attachments?.length);
  }

  get attachments(): Array<{ name: string; url: string; }> {
    return this.message.attachments || [];
  }

  get formattedDate(): string {
    const date = new Date(this.message.date);
    return `${date.toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })} at ${date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}`;
  }
}
