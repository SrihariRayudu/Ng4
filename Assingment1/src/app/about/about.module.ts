import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutListComponent } from './about-list/about-list.component';
import { routing } from '../app.routing';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    routing
  ],
  declarations: [AboutListComponent]
})
export class AboutModule { }
