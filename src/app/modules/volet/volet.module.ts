import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoletRoutingModule } from './volet-routing.module';
import { VoletComponent } from './pages/volet/volet.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [VoletComponent],
  imports: [
    CommonModule,
    VoletRoutingModule,
    SharedModule
  ]
})
export class VoletModule { }
