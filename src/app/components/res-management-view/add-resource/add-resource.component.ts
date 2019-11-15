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

successFlag:boolean = false;

public name: string;
public position: string
public doj: string;
public  exp: string;
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

ngOnInit() {}

onSubmit(){
  let newResource = new Resource(this.name,
    this.position, 
    this.doj,
    this. exp,
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
