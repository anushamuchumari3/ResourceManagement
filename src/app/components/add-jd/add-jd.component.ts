import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
import { JDAdditionService } from 'src/app/services/jdaddition.service';
import { descriptions } from 'src/app/mock_data/descriptions';
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
  ngOnInit() {
    //const posname = this.JDAdditionForm.get('jdPosition')
    this.JDAdditionForm = this.formBuilder.group({
      jdPosition: ['',[Validators.required,Validators.minLength(2),Validators.maxLength(50)]],
      persons: [" ",Validators.required],
      category: [" "],
      location: [" ",[Validators.required]],
      time: [" "],
      experience: [" "],
      skill: [" ",[Validators.required]],
      description: [" ",[Validators.required]],
      comment: [" "],
      skillMatrix: [false,[Validators.required]],
      requestAcknowledgment: [false,[Validators.required]],
      requestRecieveTime:[" "],
      uploadAttachment:[" "],
    });

    

  }
 
  addJobDescs(){
    const formValue = this.JDAdditionForm.value
    console.warn("jdPosition value"+formValue.jdPosition);
    this.jobDesc ={
      position:formValue.jdPosition,
      noPositions: formValue.persons,
      category:formValue.category,
      location:formValue.location,
      boardingTime: formValue.time,
      experience:formValue.experience,
      skill:formValue.skill,
      JDDescription:formValue.description,
      comment:formValue.comment,
      skillMatrix:formValue.skillMatrix,
      requestAcknowledgment:formValue.requestAcknowledgment,
      requestRecieveTime:formValue.requestRecieveTime,
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

}
