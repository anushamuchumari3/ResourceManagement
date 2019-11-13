import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResManagementViewComponent} from './components/res-management-view/res-management-view.component'
import {ResourceDetailComponent} from './components/res-management-view/resource-detail/resource-detail.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/viewResource',
    pathMatch: 'full'
  },
  {
    path: 'viewResource',
    component: ResManagementViewComponent
  },
  {
    path: 'resourceDetail/:id',
    component: ResourceDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
