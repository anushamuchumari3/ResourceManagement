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
        name:"Add JD",
        link:"/addJD"
      },
      {
        name:"JD List",
        link:"/listJD"
      },
      {
        name:"Add Profile",
        link:""
      },
      {
        name:"Profile List",
        link:""
      }
    ]
  }

}
