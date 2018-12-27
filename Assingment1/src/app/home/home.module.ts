import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeListComponent } from './home-list/home-list.component';
import { routing } from '../app.routing';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    routing
  ],
  declarations: [HomeListComponent]
})
export class HomeModule { }
