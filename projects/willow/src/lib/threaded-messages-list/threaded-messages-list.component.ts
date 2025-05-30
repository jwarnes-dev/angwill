import { CommonModule } from '@angular/common';
import { Component, computed, input, signal, ViewEncapsulation } from '@angular/core';
import { ThreadedMessage } from '../models/threaded-message.model';
import { ThreadedMessageComponent } from '../threaded-message/threaded-message.component';

@Component({
    selector: 'willow-threaded-messages-list',
    templateUrl: './threaded-messages-list.component.html',
    imports: [CommonModule, ThreadedMessageComponent],
    styleUrls: ['./threaded-messages-list.component.css'],
    encapsulation: ViewEncapsulation.None,
})
export class ThreadedMessagesListComponent {
    messages = input<ThreadedMessage[]>([]);
    showReplyForm = signal<boolean>(false);

    sortedMessages = computed(() =>
        [...this.messages()].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    );

    toggleReplyForm(): void {
        this.showReplyForm.set(!this.showReplyForm());
    }
}
