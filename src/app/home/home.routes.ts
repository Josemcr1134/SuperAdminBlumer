import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { GraphicDataComponent } from './Metrics/graphic-data/graphic-data.component';
import { UsersBDComponent } from './Users/users-bd/users-bd.component';
import { GeneralComponent } from './Transactions/general/general.component';
import { DonationsComponent } from './Transactions/donations/donations.component';
import { WalletComponent } from './Transactions/wallet/wallet.component';
import { QRComponent } from './Transactions/qr/qr.component';
import { AdvertisementsComponent } from './Transactions/advertisements/advertisements.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { CaPostReportedComponent } from './post-reported/ca-post-reported.component';
import { MarketPlaceComponent } from './MarketPlace/market-place/market-place.component';
import { CompanyComponent } from './Companys/company/company.component';
import { SalesComponent } from './sales/sales.component';
import { UserBdComponent } from './Users/user-bd/user-bd.component';
import { MarketProductsComponent } from './MarketPlace/market-products/market-products.component';
import { CompanyBDComponent } from './Companys/company-bd/company-bd.component';


const routes: Routes = [
    { path: 'Dashboard', component: HomeComponent, 
        children: [
            { path: '', component: GraphicDataComponent,  data:{title: 'Indicadores Gráficos'} },
            { path: 'UsersBD', component: UsersBDComponent,  data:{title: 'Usuarios'} },
            { path: 'UserBD/:id', component: UserBdComponent,  data:{title: 'Usuario - Base de datos'} },
            { path: 'General-Transactions', component: GeneralComponent,  data:{title: 'Transacciones'} },
            { path: 'Donations-Transactions', component: DonationsComponent,  data:{title: 'Transacciones - Donación'} },
            { path: 'Wallet-Transactions', component: WalletComponent,  data:{title: 'Transacciones - Wallet'} },
            { path: 'QR-Transactions', component: QRComponent, data:{title:'Transacciones - QR'} },
            { path: 'Advertisements-Transactions', component: AdvertisementsComponent ,data:{title:'Transacciones - Publicidad'} },
            { path: 'Campaings', component: CampaignsComponent, data:{title:'Campañas'} },
            { path: 'Reported-Posts', component: CaPostReportedComponent, data:{title:'Post Reportados'} },
            { path: 'MarketPlace', component: MarketPlaceComponent, data:{title:'MarketPlace'} },
            { path: 'MarketPlace/:id/MarketProducts', component: MarketProductsComponent, data:{title:'Tienda - Productos'} },
            { path: 'Company', component: CompanyComponent, data:{title:'Empresas'} },
            { path: 'Company/:id', component: CompanyBDComponent, data:{title:'Empresa - Base de datos'} },
            { path: 'Sales', component: SalesComponent, data:{title:'Ventas'} },
            { path: '**', component: GraphicDataComponent },
        ] },
   

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {}
