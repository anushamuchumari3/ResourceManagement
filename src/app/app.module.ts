import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResManagementViewComponent } from './components/res-management-view/res-management-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonToggleModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import { ResourceDetailComponent } from './components/res-management-view/resource-detail/resource-detail.component';
import { CdkColumnDef } from '@angular/cdk/table';
import { AddResourceComponent } from './components/res-management-view/add-resource/add-resource.component';

@NgModule({
  declarations: [
    AppComponent,
    ResManagementViewComponent,
    ResourceDetailComponent,
    AddResourceComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule, 
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatButtonToggleModule
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
