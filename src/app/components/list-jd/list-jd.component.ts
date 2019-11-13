import { Component, OnInit } from '@angular/core';
import { descriptions } from 'src/app/mock_data/descriptions';
import { JDAdditionService } from 'src/app/services/jdaddition.service';

@Component({
  selector: 'app-list-jd',
  templateUrl: './list-jd.component.html',
  styleUrls: ['./list-jd.component.css']
})
export class ListJDComponent implements OnInit {
  jobsList:any;
  

  constructor(private jdAdditionService:JDAdditionService) { 
    this.jobsList =  descriptions;
  }

  ngOnInit() { 
    this. getJobDescs();
   }

  getJobDescs(): void {
    this.jobsList = this.jdAdditionService.getJobs();
  }


  description: descriptions;

onSelect(selectedJD: descriptions): void {
  this.description = selectedJD;
  console.log("this.description"+this.description.category);

}
}
