import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FenetreRoutingModule } from './fenetre-routing.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FenetreRoutingModule,
    SharedModule
  ]
})
export class FenetreModule { }
