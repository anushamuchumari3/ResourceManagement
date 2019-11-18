import { Component, OnInit, ViewChild } from '@angular/core';
import {ResourceDetailListService} from '../resource-detail-list.service'
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Sort, MatSort} from '@angular/material/sort';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import { Resource } from '../Resource';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-res-management-view',
  templateUrl: './res-management-view.component.html',
  styleUrls: ['./res-management-view.component.css']
})
export class ResManagementViewComponent implements OnInit {

  public resource: any;
  sortedData: MatSort;
  dataSource = new MatTableDataSource(this.resource);
  displayedColumns = ['name', 'position', 'doj', 'exp', 'location', 'primeSkill', 'mob', 'ktPlan', 'availablity', 'actions'];

  constructor(private _resourceService: ResourceDetailListService, private router: Router) {
    this._resourceService.getResources().subscribe(result => {
      if (!result)
        return;
      this.resource = result;
      this.dataSource.data = this.resource;
    }); 
   }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;
  ngOnInit() {
     this.resource = this._resourceService.resourceListJson;    
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.sort = this.matSort;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
   
   sortData(sort: MatSort) {
    const data = this.resource.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a: any, b: any) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'position': return compare(a.position, b.position, isAsc);
        case 'doj': return compare(a.doj, b.doj, isAsc);
        case 'exp': return compare(a.exp, b.exp, isAsc);
        case 'location': return compare(a.location, b.location, isAsc); 
        case 'primeSkill': return compare(a.primeSkill, b.primeSkill, isAsc);
        case 'mob': return compare(a.mob, b.mob, isAsc);
        case 'ktPlan': return compare(a.ktPlan, b.ktPlan, isAsc);
        case 'availablity': return compare(a.availablity, b.availablity, isAsc);
        default: return 0;
      }
    });
  }

  showModal():void {
    //window.$('#modalTarget').modal();
    $("#modalTarget").modal('show');
  }

  showResource(data: Resource){
    this.router.navigate(["resourceDetail"],  {
      queryParams: {
          "data": JSON.stringify(data)
      }
    });
  }

  editResource(data: Resource){

  }
  removeResource(data: Resource){
    //this._resourceService.deleteResource(index);
    this._resourceService.remove(data);
  }
  
  onRowClicked(row: any) {
    console.log('Row clicked: ', row);
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


