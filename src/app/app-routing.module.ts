import { ErrorrouteComponent } from './errorroute/errorroute.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceComponent } from './service/service.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  { path: '' , redirectTo:"Home", pathMatch:"full" },
  { path: 'header' , component:HeaderComponent },
  { path: 'Home' , component:HomeComponent },
  { path: 'aboutus' , component:AboutComponent },
  { path: 'service' , component:ServiceComponent },
  { path: 'price' , component:PricingComponent },
  { path: 'contactus' , component:ContactUsComponent },
  { path: 'footer' , component:FooterComponent },
  { path: '**' , component:ErrorrouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [20, 5],
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
