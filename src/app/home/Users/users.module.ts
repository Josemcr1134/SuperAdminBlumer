import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersBDComponent } from './users-bd/users-bd.component';
import { UserBdComponent } from './user-bd/user-bd.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UsersBDComponent,
    UserBdComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UsersModule { }
