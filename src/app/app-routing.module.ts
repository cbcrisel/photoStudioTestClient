import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './components/event/event.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Constants } from './Constants';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo: Constants.ROUTE_HOME
  },
  {
    path:Constants.ROUTE_HOME,
    component: HomeComponent
  },
  {
    path:Constants.ROUTE_LOGIN,
    component: LoginComponent
  },
  {
    path:Constants.ROUTE_EVENTS,
    component: EventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
