import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Chat } from 'src/app/interfaces/chat';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent {
  @Input() chat: Chat | null = null;
  @Output() edit = new EventEmitter<Chat>();
}
