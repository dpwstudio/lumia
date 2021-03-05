import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortailRoutingModule } from './portail-routing.module';
import { PortailComponent } from './pages/portail/portail.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PortailComponent],
  imports: [
    CommonModule,
    PortailRoutingModule,
    SharedModule
  ]
})
export class PortailModule { }
