import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/*import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';*/


const routes: Routes = [
  
 /* {
    path: 'nav',
    component: NavigationComponent
 },
// { path: "", redirectTo: "home", pathMatch: "full" },
{ path: "home", component: HomeComponent },
{ path: "project", component: ProjectsComponent },
{ path: "contact", component: ContactComponent },
{ path: "service", component: ServicesComponent }, */
  
  {
    path: 'homemod',
    loadChildren: 'src/app/home/home.module#HomeModule'
  },
  {
    path: 'contactmod',
    loadChildren: 'src/app/contact/contact.module#ContactModule'
  },
  {
    path: 'aboutmod',
    loadChildren: 'src/app/about/about.module#AboutModule'
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);