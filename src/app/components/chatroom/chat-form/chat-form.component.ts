import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.scss'],
})
export class ChatFormComponent {
  @Output() newChatEvent = new EventEmitter<string>();

  newChat(newMessage: string): void {
    this.newChatEvent.emit(newMessage);
  }
}
