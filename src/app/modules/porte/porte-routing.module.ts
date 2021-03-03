import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorteComponent } from './pages/porte/porte.component';

const routes: Routes = [
  {
    path: 'portes',
    component: PorteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PorteRoutingModule { }
