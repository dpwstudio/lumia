import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortailRoutingModule } from './portail-routing.module';
import { PortailComponent } from './pages/portail/portail.component';


@NgModule({
  declarations: [PortailComponent],
  imports: [
    CommonModule,
    PortailRoutingModule
  ]
})
export class PortailModule { }
