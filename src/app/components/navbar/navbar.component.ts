import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuList:any;
  constructor() { }

  ngOnInit() {
    this.menuList = [

      {
        name:"Add Requirement",
        link:"/addJD"
      },
      {
        name:"View Requirements",
        link:"/listJD"
      },
      {
        name:"Reports",
        link:""
      }
    ]
  }

}
