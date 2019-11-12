import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-jd',
  templateUrl: './add-jd.component.html',
  styleUrls: ['./add-jd.component.css']
})
export class AddJDComponent implements OnInit {
  JDAdditionForm = new FormGroup({
    position: new FormControl(''),
    persons: new FormControl(''),
    category:new FormControl(''),
    location:new FormControl(''),
    time:new FormControl(''),
    experience:new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }

}
