import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideBarComponent,
    BreadCrumbsComponent
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SideBarComponent,
    BreadCrumbsComponent
  ],
  imports: [
    CommonModule, 
    RouterModule
  ]
})
export class SharedModule { }
