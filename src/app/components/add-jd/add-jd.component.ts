import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { JDAdditionService } from 'src/app/services/jdaddition.service';
import { descriptions } from 'src/app/mock_data/descriptions';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-add-jd',
  templateUrl: './add-jd.component.html',
  styleUrls: ['./add-jd.component.css']
})
export class AddJDComponent implements OnInit {

  successFlag:boolean = false;
  JDAdditionForm = new FormGroup({
    jdPosition: new FormControl('',Validators.required),
    persons: new FormControl(''),
    category:new FormControl(''),
    location:new FormControl(''),
    time:new FormControl(''),
    experience:new FormControl(''),
    skill:new FormControl(''),
    description:new FormControl(''),
    comment:new FormControl(''),
  });

  constructor(private jdAddService:JDAdditionService) { }

  
  ngOnInit() {
    //const posname = this.JDAdditionForm.get('jdPosition')
  }
  jobDesc:descriptions ={
    position:"this.jPosition",
    noPositions: 2,
    category:"IT",
    location:"Noida",
    boardingTime: new Date,
    experience:6,
    skill:"Html,css,react",
    JDDescription:"details of position",
    comment:"NA"
  };
  addJobDescs(){
    console.warn(this.JDAdditionForm.value);
    console.log("added jd is :"+this.JDAdditionForm.controls.jdPosition);
     this.jdAddService.addJobs(this.jobDesc);
     
     return this.successFlag = !this.successFlag;
  }
}
