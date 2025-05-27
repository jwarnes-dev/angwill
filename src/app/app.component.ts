import { Component } from '@angular/core';
import { ThreadedMessage } from '../../dist/willow';
import { ThreadedMessagesListComponent } from '../../projects/willow/src/public-api';


@Component({
  selector: 'app-root',
  imports: [
    ThreadedMessagesListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '@wellmark/angular-willow';
  threadedMessages: ThreadedMessage[] = [
    {
      name: 'Message 1 Name',
      date: '02/02/2025',
      text: 'This is the first message',
      isRepresentative: false,
      correspondence: '12345'
    },
    {
      name: 'Message 2 Name',
      date: '02/02/2025',
      text: 'This is the second message',
      isRepresentative: true,
      correspondence: '67890'
    }
  ]
}
