import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResManagementViewComponent} from './components/res-management-view/res-management-view.component';
import {ResourceDetailComponent} from './components/res-management-view/resource-detail/resource-detail.component';
import {AddResourceComponent} from './components/res-management-view/add-resource/add-resource.component';
import { LoginComponent } from './components/login/login.component';
import { AppComponent } from './app.component';
import { AddJDComponent } from './components/add-jd/add-jd.component';
import { ListJDComponent } from './components/list-jd/list-jd.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
 
  {
    path: 'login',
    component: LoginComponent      
},
{
  path:'listJD',
  component:ListJDComponent
},
{
  path: 'addJD',
  component: AddJDComponent
},
{
  path:'home',
  component: HomeComponent
},
{
  path: 'viewResource',
  component: ResManagementViewComponent
},
{
  path: 'resourceDetail/:id',
  component: ResourceDetailComponent
},
{
  path: 'addResource',
  component: AddResourceComponent
},
{
  path: '',
  component: LoginComponent      
},
{
  path: '**',
  component: LoginComponent      
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
