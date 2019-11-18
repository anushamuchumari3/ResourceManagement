import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-modal-demo',
  templateUrl: './modal-demo.component.html',
  styleUrls: ['./modal-demo.component.css']
})
export class ModalDemoComponent implements OnInit {

  constructor() { }
  public $ :any;
  ngOnInit() {

  }
  // showModal():void {
  //   $("#myModal").modal('show');
  // }
  sendModal(): void {
    //do something here
    this.hideModal();
  }
  hideModal():void {
    document.getElementById('close-modal').click();
  }

}
