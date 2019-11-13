import { Component, OnInit, ViewChild } from '@angular/core';
import {ResourceDetailListService} from '../resource-detail-list.service'
import {PageEvent} from '@angular/material/paginator';
import {Sort} from '@angular/material/sort';

export interface Resource {
  name: string;
  position: string
  doj: string;
  location: string;
  primeSkill: string;
  mob: string;
  ktPlan: string;
  availablity: boolean;
}
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
  sortedData: any[];
  constructor(resourceDetail: ResourceDetailListService) {
    this.resourceLists = resourceDetail.getResources();
       // MatPaginator Inputs
  //  length = this.resourceLists.length;
  //   this.sortedData = this.resourceLists.slice();
   }

  ngOnInit() {
    // this.dataTable = $(this.table.nativeElement);
    // this.dataTable.DataTable();
  }

   // MatPaginator Inputs
   //length = this.resourceLists.length;
   pageSize = 0;
   pageSizeOptions: number[] = [2, 4, 5, 10];
 
   // MatPaginator Output
   pageEvent: PageEvent;
 
   setPageSizeOptions(setPageSizeOptionsInput: string) {
     this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
   }

   sortData(sort: Sort) {
    const data = this.resourceLists.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        /*case 'calories': return compare(a.calories, b.calories, isAsc);
        case 'fat': return compare(a.fat, b.fat, isAsc);
        case 'carbs': return compare(a.carbs, b.carbs, isAsc);
        case 'protein': return compare(a.protein, b.protein, isAsc); */
        default: return 0;
      }
    });
  }

  showResource(index: number){

  }
  editResource(index: number){

  }
  removeResource(index: number){

  }
  
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
