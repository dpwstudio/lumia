import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VoletRoutingModule } from './volet-routing.module';
import { VoletComponent } from './pages/volet/volet.component';


@NgModule({
  declarations: [VoletComponent],
  imports: [
    CommonModule,
    VoletRoutingModule
  ]
})
export class VoletModule { }
