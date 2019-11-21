import { NgModule } from '@angular/core';
import {MatButtonToggleModule, MatTableModule, MatFormFieldModule, MatSelectModule, MatIconModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';    
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTreeModule} from '@angular/material/tree';
const Material = [
  MatTooltipModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatTableModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatTreeModule

]
@NgModule({
  imports: [Material],
  exports:[Material]
})
export class AngularMaterialModule { }
