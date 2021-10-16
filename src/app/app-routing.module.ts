import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authRoutingModule } from './auth/auth.routes';
import { DashboardRoutingModule } from './home/home.routes';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), authRoutingModule, DashboardRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
