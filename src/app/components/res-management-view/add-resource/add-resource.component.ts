import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import {ResourceDetailListService} from '../../resource-detail-list.service'
import { Resource } from '../../Resource';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.css']
})
export class AddResourceComponent implements OnInit {

@ViewChild('fileInput', { read: ElementRef }) private fileInput: ElementRef;
public profileUpload: string = "";
successFlag:boolean = false;

public id: number;
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
public profile:  string;

constructor(private _resourceService: ResourceDetailListService) { 
  this.id = _resourceService.resourceListJson.length;
}
ngOnInit() {}

onSubmit(){
  this.profile = this.profileUpload;
  let newResource = new Resource(
    this.id+1,
    this.name,
    this.position, 
    this.doj,
    this. exp,
    this.location,
    this.primeSkill,
    this.mob,
    this.ktPlan,
    this.availablity,
    this.comment,
    this.profile);
  this.addResource(newResource);
  console.log("template driven form sumitted    :"+newResource.name);
}
  addResource(newResource){
    console.log("res at addResource method... : "+newResource +"name : "+newResource.name)
  this._resourceService.addResource(newResource);
  console.log("template this.name    :"+this.name);
  return this.successFlag = !this.successFlag;
 }

 onFileChange(event) {
  //this.uploadStatus = 0;
  if (event.target.files.length > 0) {
    let file = event.target.files[0].name;
    //this.form.get('profile').setValue(file);
    this.profileUpload = file;
    console.log("File uploaded");
  }
}
}
