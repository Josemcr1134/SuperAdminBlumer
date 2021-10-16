import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonationsComponent } from './donations/donations.component';
import { GeneralComponent } from './general/general.component';
import { WalletComponent } from './wallet/wallet.component';
import { QRComponent } from './qr/qr.component';
import { AdvertisementsComponent } from './advertisements/advertisements.component';



@NgModule({
  declarations: [
    GeneralComponent,
    DonationsComponent,
    WalletComponent,
    QRComponent,
    AdvertisementsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionsModule { }
