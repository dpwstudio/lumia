import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevisComponent } from './components/devis/devis.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [DevisComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DevisComponent
  ]
})
export class SharedModule { }
