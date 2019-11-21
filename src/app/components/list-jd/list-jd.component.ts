import { Component, OnInit } from '@angular/core';
import { descriptions } from 'src/app/mock_data/descriptions';
import { JDAdditionService } from 'src/app/services/jdaddition.service';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface Requirement_JD {
  name: string;
  stage?: Requirement_JD[];
}

const TREE_DATA: Requirement_JD[] = [
  {
    name: 'AirBusStaffing-20112019-JD1',
    stage: [
      {name: 'JD addition Complete'},
      {name: 'Profiles Sent & Acknowledged'},
      {name: 'Selected  Profiles'},
    ]
  }, {
    name: 'AirBusStaffing-20112019-JD2',
    stage: [
          {name: 'JD addition Complete'},
          {name: 'Profiles Sent & Acknowledged'},
        ]
      },
    ]


/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'app-list-jd',
  templateUrl: './list-jd.component.html',
  styleUrls: ['./list-jd.component.css']
})
export class ListJDComponent implements OnInit {
  jobsList:any;
  
  treeControl = new NestedTreeControl<Requirement_JD>(node => node.stage);
  dataSource = new MatTreeNestedDataSource<Requirement_JD>();

  constructor(private jdAdditionService:JDAdditionService) { 
    this.jobsList =  descriptions;
    this.dataSource.data = TREE_DATA;
  }
  hasChild = (_: number, node: Requirement_JD) => !!node.stage && node.stage.length > 0;
  ngOnInit() { 
    this. getJobDescs();
   }

  getJobDescs(): void {
    this.jobsList = this.jdAdditionService.getJobs();
  }


  description: descriptions;

  onSelect(selectedJD: descriptions): void {
    this.description = selectedJD;
    console.log("this.description"+this.description.category);

  }
  deleteJds(index:any){

    console.log("inside list jd ts file "+index)
    this.jdAdditionService.deleteJob(index);
    this.jobsList = this.jdAdditionService.getJobs();
   
  }
  confirmDelete(){
    confirm("The selected JD will be deleted");
  }
  
}
