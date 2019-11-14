import { Component, OnInit } from '@angular/core';
import {ResourceDetailListService} from '../../resource-detail-list.service'
import { Resource } from '../../Resource';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.css']
})
export class AddResourceComponent implements OnInit {

  resource: Resource; 
  successFlag:boolean = false;
/*  ResourceAdditionForm = new FormGroup({
    name: new FormControl(''),
    position: new FormControl(''),
    doj: new FormControl(''),
    location: new FormControl(''),
    primeSkill: new FormControl(''),
    mob: new FormControl(''),
    ktPlan: new FormControl(''),
    availablity:new FormControl(''),
    comment: new FormControl('')
  });*/
  // constructor(private _resourceService: ResourceDetailListService) { }

  public id: number;
  public name: string;
  public power: string;
  //public alterEgo?: string
constructor() {  }
ngOnInit() {
//this.name='rama';
}
model=new Object();
onSubmit(){
  console.log("template driven form sumitted    :"+this.name);
}
/*
newResource: Resource = {
  name: this.name,
  position: this.position, 
  doj: this.doj,
  location: this.location,
  primeSkill: this.primeSkill;
  mob: this.mob,
  ktPlan: this.ktPlan,
  availablity: this.availablity,
  comment: this.comment 
}
 addResource(){
  this._resourceService.addResource(this.resource);
      return this.successFlag = !this.successFlag;
 }*/
}
