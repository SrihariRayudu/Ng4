import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routing } from '../app.routing';
import {HomeListComponent} from  './home-list/home-list.component';
const routes: Routes = [

  { path: '', component: HomeListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 //imports: [routing],
  exports: [RouterModule]
})
export class HomeRoutingModule { }


