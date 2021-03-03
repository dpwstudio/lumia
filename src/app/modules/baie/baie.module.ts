import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaieRoutingModule } from './baie-routing.module';
import { BaieComponent } from './pages/baie/baie.component';


@NgModule({
  declarations: [BaieComponent],
  imports: [
    CommonModule,
    BaieRoutingModule
  ]
})
export class BaieModule { }
