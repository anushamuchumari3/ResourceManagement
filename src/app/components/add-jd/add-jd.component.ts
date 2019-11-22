import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { JDAdditionService } from 'src/app/services/jdaddition.service';
import { descriptions } from 'src/app/mock_data/descriptions';
import * as category from '../common_lists/category';
import * as location from '../common_lists/location'
import * as experience from '../common_lists/experience'
import { Resource } from '../Resource';
import { ResourceDetailListService } from '../resource-detail-list.service';

@Component({
  selector: 'app-add-jd',
  templateUrl: './add-jd.component.html',
  styleUrls: ['./add-jd.component.css']
})
export class AddJDComponent implements OnInit {

 
  JDAdditionForm:FormGroup;
  successFlag:boolean = false;
  jobDesc:descriptions;
  resources: Resource[];
  matchedProfiles: Resource[] = [];
  profileMatchFlag = '';
  skills: String;
  pos:number;
  categories:any;
  locations:any;
  experiences:any;
  positions:number[] = [1,2,3,4,5,6,7,8,9,10];
  requirementNumber:String;
  successMessge:string;
  date:Date=new Date();

  constructor(private jdAddService:JDAdditionService, private formBuilder: FormBuilder, private _resourceService: ResourceDetailListService) { }

  ngOnInit() {
    this.categories = category.CATEGORY;
    this.locations = location.LOCATION;
    this.experiences = experience.EXPERIENCE;
    console.log("this.categories "+this.categories[0].categoryName);
    //const posname = this.JDAdditionForm.get('jdPosition')
    this.createJDForm();
  }


  createJDForm () {
    this.JDAdditionForm = this.formBuilder.group({
      reqNumber:[" "],
      JdNumber:[" ",Validators.required],
      jdPosition: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
      persons: [" ",Validators.required],
      category: [" "],
      location: [" ",[Validators.required]],
      boardingDate: [" "],
      experience: [" "],
      skill: [" ",[Validators.required]],
      description: [" ",[Validators.required]],
      comment: [" "],
      skillMatrix: [false],
      requestAcknowledgment: [false],
      requestRecieveTime:[" "],
      uploadAttachment:[" "],
      acknowledgementDate:[" "],
    });

  }

  addJobDescs(){
   
    const formValue = this.JDAdditionForm.value
    console.warn("jdPosition value"+formValue.jdPosition);
    this.jobDesc ={
      reqNumber:"AirBus_Staffing_"+this.date.getTime(),
      JdNumber:formValue.JdNumber,
      position:formValue.jdPosition,
      noPositions: formValue.persons,
      category:formValue.category,
      location:formValue.location,
      boardingTime: formValue.boardingDate,
      experience:formValue.experience,
      skill:formValue.skill,
      JDDescription:formValue.description,
      comment:formValue.comment,
      skillMatrix:formValue.skillMatrix,
      requestAcknowledgment:formValue.requestAcknowledgment,
      requestRecieveTime:formValue.requestRecieveTime,
      acknowledgementDate:formValue.acknowledgementDate,
    };
    
     this.jdAddService.addJobs(this.jobDesc);
     this.skills = this.jobDesc.skill;
    //  this.JDAdditionForm.reset()
    // this.createJDForm();
   
   console.log("this.jobDesc.reqNumber; "+this.jobDesc.reqNumber);
   this.successMessge = "Successfully added !! Requirement Id is"+this.jobDesc.reqNumber;
    return this.successFlag = !this.successFlag;
  }
  
  positionOptio(){
    for(let i = 0;i<10;i++){
      this.pos = i;
    }
  }
  matchProfile() {
    this.getResourceList();
  }
  getResourceList() {
    this._resourceService.getResources().subscribe(result => {
      if (!result) {
        this.profileMatchFlag = 'No Profile(s) matched for this requirement';
      } else {
        this.resources = result;
        this.matchProfiles();
      }
    });
  }
  matchProfiles() {
    this.resources.forEach(element => {
      var resourceSkill = element.primeSkill.split(',').map(function (item) {
        return item.trim().toLowerCase();
      });
      var jdSkills = this.skills.split(',').map(function (item) {
        return item.trim().toLowerCase();
      });
      var matches = jdSkills.filter((word) => { return resourceSkill.includes(word) }).length
      element.matchPercentage = +(matches / jdSkills.length * 100).toFixed(2);
    });
    this.resources.forEach(profile => {
      if (profile.matchPercentage >= 50) {
        this.profileMatchFlag = 'Matched profile(s) for this requirement';
        this.matchedProfiles.push(profile);
      }
    });
    if (this.matchedProfiles.length <= 0) {
      this.profileMatchFlag = 'No Profile(s) matched for this requirement';
    }
    this.matchedProfiles.sort((a1, a2) => a2.matchPercentage - a1.matchPercentage);
    console.log('matched percentage' + JSON.stringify(this.matchedProfiles));
  }
  addNewJD:boolean=false;
  showNewJDForm(){
    this.addNewJD = !this.addNewJD;
  }
  requestAcknFlag:boolean = false;
  requestAcknowledge(){
    this.requestAcknFlag = !this.requestAcknFlag;
    console.log("this.requestAcknFlag "+this.requestAcknFlag );
  }
  ifSkillMatrix:boolean = false;
  uploadSkillMatrix(){
    this.ifSkillMatrix = !this.ifSkillMatrix;
    console.log("this.ifSkillMatrix "+this.ifSkillMatrix );
  }

  onResetForm() {
    this.successFlag = !this.successFlag;
    this.matchedProfiles = [];
  }

}
