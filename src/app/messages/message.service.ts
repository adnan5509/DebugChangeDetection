import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  messages = signal<string[]>([]);
  get allMessages() {
    return this.messages;
  }

  addMessage(message: string) {
    this.messages.update((oldMessages) => [message, ...oldMessages]);
  }
}