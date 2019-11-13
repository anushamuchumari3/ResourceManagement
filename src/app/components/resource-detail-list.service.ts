import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceDetailListService {

  public resourceListJson = [
    {
      name: 'Tiger Nixon',
      position: 'Team Lead',
      doj: '2011/07/25',
      location: 'Bangalore',
      primeSkill: 'Java',
      mob: '8501230456',
      ktPlan: 'In progress',
      availablity: 'Yes'
    },
    {
      name: 'Garrett Winters',
      position: 'Senior Developer',
      doj: '2010/05/08',
      location: 'Chennai',
      primeSkill: 'Java',
      mob: '8501235556',
      ktPlan: 'Complete',
      availablity: 'No'
    },
    {
      name: 'Ashton Cox',
      position: 'Developer',
      doj: '2018/12/19',
      location: 'Pune',
      primeSkill: 'Java',
      mob: '8501230996',
      ktPlan: 'In progress',
      availablity: 'Yes'
    },
    {
      name: 'Cedric Kelly',
      position: 'Software Engineer',
      doj: '2016/07/15',
      location: 'Noida',
      primeSkill: 'PHP',
      mob: '8501230776',
      ktPlan: 'Complete',
      availablity: 'Yes'
    },
    {
      name: 'Airi Satou',
      position: 'Developer',
      doj: '2013/02/21',
      location: 'Bangalore',
      primeSkill: '.net',
      mob: '8544230456',
      ktPlan: 'In progress',
      availablity: 'No'
    }
    
  ];

  constructor() { }

  getResources() {
    return this.resourceListJson;
  }

  data: Object;
  getResource(id: number){
      this.data = this.resourceListJson;
    console.log("resource........... : "+this.getResources[1]);
    return this.getResources[id];
  }
}
