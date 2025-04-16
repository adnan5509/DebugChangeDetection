import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { MessagesService } from '../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent implements OnInit, OnDestroy {

  private messageService = inject(MessagesService);

  private cdRef = inject(ChangeDetectorRef);
  messages: string[] = [];
  subscribtions: Subscription[] = [];

  ngOnInit() {
    this.subscribtions.push(this.messageService.messages$.subscribe((messages) => {
      this.messages = messages;
      this.cdRef.markForCheck();
    }));
  }

  ngOnDestroy() {
    this.subscribtions.forEach(sub => {
      sub.unsubscribe();
    });
  }

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }
}
