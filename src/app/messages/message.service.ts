import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private messages: string[] = [];
  messages$ = new BehaviorSubject<string[]>([]);
  get allMessages() {
    return this.messages;
  }

  addMessage(message: string) {
    this.messages$.next([...this.messages, message]);
    this.messages = [message, ...this.messages];
  }
}