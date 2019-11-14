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
    return this.resourceListJson.push(res);
  }

  deleteResource(res : Resource){
    return this.resourceListJson.pop();
  }
}
