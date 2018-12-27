import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MouseOverAndLeaveDirective } from './mouse-over-and-leave.directive';
import { NavigationComponent } from './navigation/navigation.component';
import { RouterModule} from '@angular/router';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NavOnclickDirective } from './nav-onclick.directive';
import { routing } from './app.routing';
import { AnimationInOutComponent } from './animation-in-out/animation-in-out.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Project1Component } from './project1/project1.component';



@NgModule({
  declarations: [
    AppComponent,
    MouseOverAndLeaveDirective,
    NavigationComponent,
    HeaderComponentComponent,
    HomeComponent,
    ProjectsComponent,
    ServicesComponent,
    ContactComponent,
    NavOnclickDirective,
    AnimationInOutComponent,
    Project1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
   routing,
   RouterModule.forRoot([
    {
      path: 'nav',
      component: NavigationComponent
   },
// { path: "", redirectTo: "home", pathMatch: "full" },
{ path: "home", component: HomeComponent },
{ path: "project", component: ProjectsComponent },
{ path: "contact", component: ContactComponent },
{ path: "service", component: ServicesComponent },
{ path: "projectapp1", component: Project1Component,
children: [
  { path: 'overview', component: Project1Component },
  { path: 'specs', component: Project1Component }
]},
{ path: "projectapp2", component: Project1Component}
 ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
