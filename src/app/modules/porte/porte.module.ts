import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PorteRoutingModule } from './porte-routing.module';
import { PorteComponent } from './pages/porte/porte.component';


@NgModule({
  declarations: [PorteComponent],
  imports: [
    CommonModule,
    PorteRoutingModule
  ]
})
export class PorteModule { }
