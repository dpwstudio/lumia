import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LayoutModule } from '../layout/layout.module';
import { SliderComponent } from './components/slider/slider.component';
import { ServiceComponent } from './components/service/service.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { ClientComponent } from './components/client/client.component';
import { PromoComponent } from './components/promo/promo.component';
import { WorkComponent } from './components/work/work.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [HomeComponent, SliderComponent, ServiceComponent, TestimonialComponent, ClientComponent, PromoComponent, WorkComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    SharedModule
  ]
})
export class HomeModule { }
