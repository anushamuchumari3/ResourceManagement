import { Component, OnInit, ViewChild } from '@angular/core';
import {ResourceDetailListService} from '../resource-detail-list.service'
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {Sort, MatSort} from '@angular/material/sort';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';

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
declare var $: any;
@Component({
  selector: 'app-res-management-view',
  templateUrl: './res-management-view.component.html',
  styleUrls: ['./res-management-view.component.css']
})
export class ResManagementViewComponent implements OnInit {

  dataSource = new ResourceDataSource(this._resourceService);

  public resourceLists = [];
  public resource;
  sortedData: Sort;
  matDataSource = new MatTableDataSource<any>();
  constructor(private _resourceService: ResourceDetailListService) {
    this.resourceLists =this._resourceService.resourceListJson;   
   }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) matSort: MatSort;
  ngOnInit() {
  }
  employeeData() {
    this._resourceService.getResources().subscribe(
      data =>{this.resource = data;},
      err=> {console.error(err);},
      () => {console.log("Data has loaded properly");}
    );
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    // this.matDataSource.sortData = this.matDataSource;
    this.matDataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.matDataSource.filter = filterValue;
  }
   

   sortData(sort: Sort) {
    const data = this.resource.slice();
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

  showModal():void {
    $("#myModal").modal('show');
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

export class ResourceDataSource extends DataSource<any> {
  
  constructor(private _resourceService: ResourceDetailListService) {
    super();
    this._resourceService.getResources();
  }

  // Connect function called by the table to retrieve one stream containing the data to render. 
  connect(): Observable<any[]> {
       
    return this._resourceService.getResources();
  }

  disconnect() {}
}
