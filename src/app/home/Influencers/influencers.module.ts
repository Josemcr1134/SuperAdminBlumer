import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfluencersDbComponent } from './influencers-db/influencers-db.component';
import { InfluencerDbComponent } from './influencer-db/influencer-db.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    InfluencersDbComponent,
    InfluencerDbComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class InfluencersModule { }
