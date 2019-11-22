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
  mode: string;
  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private _resourceDetail:ResourceDetailListService) {
   }

  ngOnInit() {
      let url = window.location.href;
      console.log("url is "+url.substring(url.length - 1,url.length));
      this.id = Number(url.substring(url.length - 1,url.length));
      this.resource=this._resourceDetail.getResource(this.id);
      // console.log(this.resource+".................my param............: "+this.id);

      this.mode = url.split('/')[4];
      console.log("mode  : "+this.mode);
  }
/*
  download() {
    window.open("C:\\AIRBUS-Banglore\\me\\Plans for Debajyoti.xlsx");
    
    this._resourceDetail.downloadFile().subscribe(response => {
			//let blob:any = new Blob([response.blob()], { type: 'text/json; charset=utf-8' });
			//const url= window.URL.createObjectURL(blob);
			//window.open(url);
			window.location.href = response.url;
			//fileSaver.saveAs(blob, 'employees.json');
		}), error => console.log('Error downloading the file'),
                 () => console.info('File downloaded successfully');
  } */
}
