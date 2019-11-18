import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { descriptions } from 'src/app/mock_data/descriptions';
import { JOBS } from 'src/app/mock_data/mockJDs';
@Injectable({
  providedIn: 'root'
})
export class JDAdditionService {
  jobs : descriptions[] = JOBS; 
  constructor() { }
  getJobs(): descriptions[] {
    return JOBS;
  }

  addJobs( jobDesc : descriptions) {
    return this.jobs.push(jobDesc);
  }

  deleteJob(index:number){
    if(index === 0 ){
     return this.jobs.splice(0,1);
    }else{
    return this.jobs.splice(index,index);
    }
  }

}
