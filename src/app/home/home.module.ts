import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';

import { MetricsModule } from './Metrics/metrics.module';
import { TransactionsModule } from './Transactions/transactions.module';
import { UsersModule } from './Users/users.module';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CaPostReportedComponent } from './post-reported/ca-post-reported.component';
import { MarketPlaceComponent } from './MarketPlace/market-place/market-place.component';
import { CompanyComponent } from './Companys/company/company.component';
import { SalesComponent } from './sales/sales.component';
import { RouterModule } from '@angular/router';
import { MarketProductsComponent } from './MarketPlace/market-products/market-products.component';
import { InfluencersModule } from './Influencers/influencers.module';
import { PreferencesQuestionsModule } from './preferences-questions/preferences-questions.module';



@NgModule({
  declarations: [
    HomeComponent,
    CampaignsComponent,
    CaPostReportedComponent,
    MarketPlaceComponent,
    CompanyComponent,
    SalesComponent,
    MarketProductsComponent,
    
    
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MetricsModule, 
    TransactionsModule, 
    UsersModule,
    InfluencersModule, 
    PreferencesQuestionsModule,
    RouterModule
  ]
})
export class HomeModule { }
