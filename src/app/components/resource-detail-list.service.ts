import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResourceDetailListService {

  public resourceListJson = [
    {
      name: 'Tiger Nixon',
      position: 'Manager',
      doj: '2011/07/25',
      location: 'Bangalore',
      primeSkill: 'Java',
      mob: '8501230456',
      ktPlan: 'In progress',
      availablity: 'Yes'
    },
    {
      name: 'Garrett Winters',
      position: 'Developer',
      doj: '2011/07/25',
      location: 'Chennai',
      primeSkill: 'Java',
      mob: '8501235556',
      ktPlan: 'Complete',
      availablity: 'No'
    },
    {
      name: 'Ashton Cox',
      position: 'Accountant',
      doj: '2011/07/25',
      location: 'Pune',
      primeSkill: 'Java',
      mob: '8501230996',
      ktPlan: 'In progress',
      availablity: 'Yes'
    },
    {
      name: 'Cedric Kelly',
      position: 'HR',
      doj: '2011/07/25',
      location: 'Noida',
      primeSkill: 'Java',
      mob: '8501230776',
      ktPlan: 'Complete',
      availablity: 'Yes'
    },
    {
      name: 'Airi Satou',
      position: 'Testing Engineer',
      doj: '2011/07/25',
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
}
