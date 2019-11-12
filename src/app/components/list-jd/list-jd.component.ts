import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-jd',
  templateUrl: './list-jd.component.html',
  styleUrls: ['./list-jd.component.css']
})
export class ListJDComponent implements OnInit {
  //theadList:any;
  jdList:any;
  
  constructor() { }

  ngOnInit() {
  
    this.jdList = [
      {
        firstName:"john",
        lasttName:"Ally",
        email:"john.ally@soprasteria.com",
        designation:"Senior Software engineer",
        role:"Full stack Developer",
        experience:"6",
        location:"noida site 3",
        contact:"8965656456"
      }
    ];
  }

}
