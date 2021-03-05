import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaieRoutingModule } from './baie-routing.module';
import { BaieComponent } from './pages/baie/baie.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [BaieComponent],
  imports: [
    CommonModule,
    BaieRoutingModule,
    SharedModule
  ]
})
export class BaieModule { }
