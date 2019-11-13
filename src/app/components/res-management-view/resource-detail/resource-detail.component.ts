import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {ResourceDetailListService} from '../../resource-detail-list.service'
import { Resource } from '../res-management-view.component';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.css']
})
export class ResourceDetailComponent implements OnInit {
  id: number;
  resource: Resource;
   /* Using Subscribe */
   sub: any;
  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private _resourceDetail:ResourceDetailListService) {
   }

  ngOnInit() {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
       this.id = Number(params.get('id')); 
       this.resource=this._resourceDetail.getResource(this.id);
       console.log(this.resource+".................my param............: "+this.id);
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
