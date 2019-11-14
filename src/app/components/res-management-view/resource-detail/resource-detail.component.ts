import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {ResourceDetailListService} from '../../resource-detail-list.service'
import { Resource } from '../../Resource';

@Component({
  selector: 'app-resource-detail',
  templateUrl: './resource-detail.component.html',
  styleUrls: ['./resource-detail.component.css']
})
export class ResourceDetailComponent implements OnInit {
  id: number;
  resource: Resource;

  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private _resourceDetail:ResourceDetailListService) {
   }

  ngOnInit() {
      let url = window.location.href;
      console.log("url is "+url.substring(url.length - 1,url.length));
      this.id = Number(url.substring(url.length - 1,url.length));
      this.resource=this._resourceDetail.getResource(this.id);
      console.log(this.resource+".................my param............: "+this.id);

  }

}
