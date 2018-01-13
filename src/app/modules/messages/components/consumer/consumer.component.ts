import {Component, OnInit} from '@angular/core';
import {MessagesService} from "../../services/messages.service";

@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.css']
})
export class ConsumerComponent implements OnInit {

  messages = [];
  public available = false;

  constructor(private messagesService: MessagesService) {
  }

  ngOnInit() {
    this.messagesService.getMessages().subscribe(res => {
      this.messages = res.messages;
      this.available = true;
    });
  }
}
