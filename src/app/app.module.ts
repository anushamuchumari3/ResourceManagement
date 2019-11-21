import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddJDComponent } from './components/add-jd/add-jd.component';
import { ListJDComponent } from './components/list-jd/list-jd.component';
import { HomeComponent } from './components/home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalDemoComponent } from './components/modal-demo/modal-demo.component';
import * as bootstrap from "bootstrap";
import * as $ from "jquery";
import { CdkColumnDef } from '@angular/cdk/table';
import {AngularMaterialModule} from './modules/angular-material/angular-material.module'
import { CommonModule } from '@angular/common';
 

@NgModule({
  declarations: [
    AppComponent,
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
