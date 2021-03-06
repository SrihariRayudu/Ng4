import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactListComponent } from './contact-list/contact-list.component';
import { routing } from '../app.routing'

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    routing
  ],
  declarations: [ContactListComponent]
})
export class ContactModule { }
