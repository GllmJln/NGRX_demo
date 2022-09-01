import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}

  get messages$(): Observable<string[]> {
    return this.messageService.messages$;
  }

  handleClick() {
    this.messageService.clear();
  }
}
