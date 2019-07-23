import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  messageToSendP: string = '';
  receivedChildMessage: string;
  ngOnInit() {

  }
  sendToChild(message: string) {
    this.messageToSendP = message;
  }
  getMessage(message: string) {
    this.receivedChildMessage = message;
  }


}