import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { of } from 'rxjs';
import {Resource} from './Resource';
import {resourceList} from './mockResData';
import { element } from '@angular/core/src/render3';
// import {HttpResponse} from '@angular/common/http';
// import {Http, ResponseContentType} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ResourceDetailListService {

  resourceListJson : Resource[] = resourceList; 
  data: Resource;
  constructor() { }

  getResources(): Observable<any[]> {
    // console.log("resource.......getResources.... : "+this.resourceListJson);
    return of(this.resourceListJson);
  }

  getResource(id: number){
    this.data = this.resourceListJson.find(element => element.id == id);
    return this.data;
  }

  addResource( res : Resource) {
    console.log(this.resourceListJson+"      Added new resource.. : "+res);
    console.log("Added new resource.. in service : "+res.name);
    console.log("data before"+this.resourceListJson.length);
    this.resourceListJson.push(res);
    console.log("data after"+this.resourceListJson.length);
    return this.resourceListJson;
  }

  deleteResource(index : number){
    if(index === 0 ){
      return this.resourceListJson.splice(0,1);
     }else{
       console.log("Resources "+index + " is deleted");
     return this.resourceListJson.splice(index,1);
     }
  }

  remove(res: Resource){
    const index = this.resourceListJson.findIndex(element => element === res);
    console.log("remove index : "+ index);
    this.deleteResource(index);
  } 
  // downloadFile(): Observable<HttpResponse<Blob>>{		
	// 	return this.http.get('http://localhost:8080/employees/download', { responseType: ResponseContentType.Blob });
  //  }
}
