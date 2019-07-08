import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutComponent} from './about/about.component';
import {BlogComponent} from './blog/blog.component';
import { CarrierComponent } from './carrier/carrier.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  {path:'Home', component:HomeComponent},
  {path:'About', component:AboutComponent},
  {path:'Blog', component:BlogComponent},
  {path:'Carrier', component:CarrierComponent},
  {path:'Contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
