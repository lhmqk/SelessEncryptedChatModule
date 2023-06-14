import { Component, Input } from '@angular/core';

import { Chat } from 'src/app/interfaces/chat';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  @Input() chats: Chat[] | null = null;
  editChat(list: string, task: Chat): void {}
}
