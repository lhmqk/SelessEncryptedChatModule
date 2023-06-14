import { Component, inject } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
} from '@angular/fire/firestore';
import { Observable, BehaviorSubject, take } from 'rxjs';

import { Chat } from 'src/app/interfaces/chat';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss'],
})
export class ChatroomComponent {
  firestore: Firestore = inject(Firestore);
  chatsSubject = new BehaviorSubject<any[]>([]);
  chats$ = this.chatsSubject.asObservable();

  constructor() {
    const aCollection = collection(this.firestore, 'chats');
    collectionData(aCollection).subscribe((chats) => {
      this.chatsSubject.next(chats);
    });
  }

  // constructor(private store: AngularFirestore) {}

  // chats = this.store
  //   .collection('chats')
  //   .valueChanges({ idField: 'id' }) as Observable<Chat[]>;

  // chats: Chat[] = [
  //   {
  //     id: '1',
  //     uid: '1',
  //     username: 'user1',
  //     message: 'Hello user2',
  //     date: '2023-06-11',
  //   },
  //   {
  //     id: '2',
  //     uid: '2',
  //     username: 'user2',
  //     message: 'Hello user1',
  //     date: '2023-06-12',
  //   },
  // ];

  async addChat(newMessage: string): Promise<void> {
    const newChat: Chat = {
      id: '1',
      uid: '0',
      username: 'test',
      message: newMessage,
      date: '2023-06-14',
    };

    try {
      const docRef = await addDoc(collection(this.firestore, 'chats'), newChat);
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  }
}
