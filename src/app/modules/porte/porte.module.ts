import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorteRoutingModule } from './porte-routing.module';
import { PorteComponent } from './pages/porte/porte.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [PorteComponent],
  imports: [
    CommonModule,
    PorteRoutingModule,
    SharedModule
  ]
})
export class PorteModule { }
