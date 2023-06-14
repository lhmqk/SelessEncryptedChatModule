import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatroomComponent } from './components/chatroom/chatroom.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserListComponent } from './components/chatroom/user-list/user-list.component';
import { UserItemComponent } from './components/chatroom/user-list/user-item/user-item.component';
import { FeedComponent } from './components/chatroom/feed/feed.component';
import { MessageComponent } from './components/chatroom/feed/message/message.component';
import { ChatFormComponent } from './components/chatroom/chat-form/chat-form.component';

import { environment } from '../environments/environment';
// import { provideAuth, getAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
// import { provideStorage, getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChatroomComponent,
    LoginComponent,
    SignupComponent,
    UserListComponent,
    UserItemComponent,
    FeedComponent,
    MessageComponent,
    ChatFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
