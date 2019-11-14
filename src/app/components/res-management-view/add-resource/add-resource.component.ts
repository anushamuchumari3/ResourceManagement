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

  // public resource: Resource; 
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
  
public name: string;
public position: string
public doj: string;
public location: string;
public primeSkill: string;
public mob: string;
public ktPlan: string;
public availablity: string;
public comment: string;

constructor(private _resourceService: ResourceDetailListService) { }

  public id: number;
  // public name: string;
  public power: string;
  //public alterEgo?: string
//constructor() {  }
ngOnInit() {
// this.name='rama';
  /*this.resource.name = this.name,
  this.resource.position = this.position, 
  this.resource.doj = this.doj,
  this.resource.location = this.location,
  this.resource.primeSkill = this.primeSkill,
  this.resource.mob = this.mob,
  this.resource.ktPlan = this.ktPlan,
  this.resource.availablity = this.availablity,
  this.resource.comment = this.comment*/
}
// model=new Object();
/*
newResource: Resource = {
  name: this.name,
  position: this.position, 
  doj: this.doj,
  location: this.location,
  primeSkill: this.primeSkill,
  mob: this.mob,
  ktPlan: this.ktPlan,
  availablity: this.availablity,
  comment: this.comment 
} */
onSubmit(){
  let newResource = new Resource(this.name,
    this.position, 
    this.doj,
    this.location,
    this.primeSkill,
    this.mob,
    this.ktPlan,
    this.availablity,
    this.comment );
  this.addResource(newResource);
  console.log("template driven form sumitted    :"+newResource.name);
}
  addResource(newResource){
    console.log("res at addResource method... : "+newResource +"name : "+newResource.name)
  this._resourceService.addResource(newResource);
  console.log("template this.name    :"+this.name);
  return this.successFlag = !this.successFlag;
 }
}
