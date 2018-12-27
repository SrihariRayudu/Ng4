import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ResourcesComponent } from './resources/resources.component';
import { EventsComponent } from './events/events.component';
import { DocsComponent } from './docs/docs.component';
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "features", component: FeaturesComponent },
  { path: "events", component: EventsComponent },
  { path: "resources", component: ResourcesComponent },
  { path: "docs", component: DocsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    ResourcesComponent,
    EventsComponent,
    DocsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
