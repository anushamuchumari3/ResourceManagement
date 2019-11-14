import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { of } from 'rxjs';
import {Resource} from './Resource';
import {resourceList} from './mockResData';

@Injectable({
  providedIn: 'root'
})
export class ResourceDetailListService {

  resourceListJson : Resource[] = resourceList; 

  constructor() { }

  getResources(): Observable<any[]> {
    // console.log("resource.......getResources.... : "+this.resourceListJson);
    return of(this.resourceListJson);
  }

  data: any;
  getResource(id: number){
      this.data = this.resourceListJson[id];

    // console.log("resource........... : "+this.resourceListJson[id]);
    // console.log("resource  id  and data  :"+this.data.name);
    return this.data;
  }

  addResource( res : Resource) {
    console.log("Added new resource.. : "+res);
    return this.resourceListJson.push(res);
  }

  deleteResource(index : number){
    //return this.resourceListJson.pop();
    if(index === 0 ){
      return this.resourceListJson.splice(0,1);
     }else{
     return this.resourceListJson.splice(index,index);
     }
  }
}
