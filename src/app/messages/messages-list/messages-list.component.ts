import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MessagesService } from '../message.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent {

  private messageService = inject(MessagesService);

  messages = this.messageService.messages;

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
