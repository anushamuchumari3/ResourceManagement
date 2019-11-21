import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResManagementViewComponent } from './components/res-management-view/res-management-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonToggleModule, MatTableModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, MatPaginatorModule, MatSortModule} from '@angular/material';
import { ResourceDetailComponent } from './components/res-management-view/resource-detail/resource-detail.component';
import { AddResourceComponent } from './components/res-management-view/add-resource/add-resource.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddJDComponent } from './components/add-jd/add-jd.component';
import { ListJDComponent } from './components/list-jd/list-jd.component';
import { HomeComponent } from './components/home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatNativeDateModule } from '@angular/material/core';
import { ModalDemoComponent } from './components/modal-demo/modal-demo.component';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";
import { CdkColumnDef } from '@angular/cdk/table';
import {AngularMaterialModule} from './modules/angular-material/angular-material.module'
import { CommonModule } from '@angular/common';
 


@NgModule({
  declarations: [
    AppComponent,
    ResManagementViewComponent,
    ResourceDetailComponent,
    AddResourceComponent,
    LoginComponent,
    NavbarComponent,
    AddJDComponent,
    ListJDComponent,
    HomeComponent,
    ModalDemoComponent
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
    MatButtonToggleModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule ,
    MatNativeDateModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    AngularMaterialModule
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { }
