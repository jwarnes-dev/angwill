import { CommonModule } from '@angular/common';
import { Component, computed, input, Input } from '@angular/core';
import { ThreadedMessage } from '../models/threaded-message.model';

@Component({
    selector: 'willow-threaded-message',
    templateUrl: './threaded-message.component.html',
    imports: [CommonModule],
    styleUrls: ['./threaded-message.component.scss'],
})
export class ThreadedMessageComponent {
    message = input.required<ThreadedMessage>();

    displayName = computed<string>(() =>
        this.message().isRepresentative ? 'Wellmark Representative' : this.message().name
    );

    isRepresentative = computed<boolean>(() => this.message().isRepresentative);

    hasAttachments = computed<boolean>(() => Boolean(this.message().attachments?.length));

    attachments = computed<Array<{ name: string; url: string }>>(() => this.message().attachments || []);

    isWellmarkRep = computed<string>(() => this.message().isRepresentative ? 'wellmark-rep' : '');

    formattedDate = computed<string>(() => {
        const date = new Date(this.message().date);
        return `${date.toLocaleString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        })} at ${date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}`;
    });
}
