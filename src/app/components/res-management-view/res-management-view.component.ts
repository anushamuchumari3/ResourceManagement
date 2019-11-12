import { Component, OnInit, ViewChild } from '@angular/core';
import {ResourceDetailListService} from '../resource-detail-list.service'

// declare var $: any;
@Component({
  selector: 'app-res-management-view',
  templateUrl: './res-management-view.component.html',
  styleUrls: ['./res-management-view.component.css']
})
export class ResManagementViewComponent implements OnInit {

  // @ViewChild('dataTable') table: any;
  // dataTable: any;

  public resourceLists = [];

  constructor(resourceDetail: ResourceDetailListService) {
    this.resourceLists = resourceDetail.getResources();
   }

  ngOnInit() {
    // this.dataTable = $(this.table.nativeElement);
    // this.dataTable.DataTable();
  }

}
