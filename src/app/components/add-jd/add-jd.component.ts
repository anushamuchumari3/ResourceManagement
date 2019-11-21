import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { JDAdditionService } from 'src/app/services/jdaddition.service';
import { descriptions } from 'src/app/mock_data/descriptions';
import * as category from '../common_lists/category';
import * as location from '../common_lists/location'
import * as experience from '../common_lists/experience'

@Component({
  selector: 'app-add-jd',
  templateUrl: './add-jd.component.html',
  styleUrls: ['./add-jd.component.css']
})
export class AddJDComponent implements OnInit {

  JDAdditionForm:FormGroup;
  successFlag:boolean = false;
  jobDesc:descriptions;
  constructor(private jdAddService:JDAdditionService, private formBuilder: FormBuilder) { }
  pos:number;
  categories:any;
  locations:any;
  experiences:any;
  positions:number[] = [1,2,3,4,5,6,7,8,9,10];
  ngOnInit() {
    this.categories = category.CATEGORY;
    this.locations = location.LOCATION;
    this.experiences = experience.EXPERIENCE;
    console.log("this.categories "+this.categories[0].categoryName);
    //const posname = this.JDAdditionForm.get('jdPosition')
    this.JDAdditionForm = this.formBuilder.group({
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
     this.JDAdditionForm.reset()
     return this.successFlag = !this.successFlag;
  }
  
  positionOptio(){
    for(let i = 0;i<10;i++){
      this.pos = i;
    }
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
}
