import {Component, Input, OnInit} from '@angular/core';
import {Messages} from "../../models/messages";

@Component({
  selector: 'app-presenter',
  templateUrl: './presenter.component.html',
  styleUrls: ['./presenter.component.css']
})
export class PresenterComponent implements OnInit {
  @Input() public messages: Array<Messages>;
  public showHide = [];
  public available = false;
  public today: string;

  constructor() {
  }

  /**
   * Here we have time from json. We can also calculate expirition time from that json. We have current time in variable today
   * I used time from json to demonstrate handling DOM
   */
  ngOnInit() {
    console.log(this.messages);
    this.available = true;
    this.messages.forEach((message) => {
      this.showHide.push(true)
      this.initiateTimer(message.expireTime, this.messages.indexOf(message))
    })
    this.todayDate();
  }

  initiateTimer(time, id) {
    setInterval(() => {
      time--;
      this.messages[id].expireTime--;
      if (time === 0) {
        // this.finishGame();
        this.showHide[id] = false;
      }
    }, 1000);
  }

  todayDate() {
    let today: Date = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let hh = today.getHours();
    const m = today.getMinutes()
    let ss = today.getSeconds();
    const yyyy = today.getFullYear();
    this.today = dd + '/' + mm + '/' + yyyy + ' ' + hh + ':' + m + ':' + ss;
  }


}
