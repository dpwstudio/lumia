import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortailComponent } from './pages/portail/portail.component';

const routes: Routes = [
  {
    path: 'portails-clotures',
    component: PortailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortailRoutingModule { }
