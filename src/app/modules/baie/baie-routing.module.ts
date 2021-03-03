import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaieComponent } from './pages/baie/baie.component';

const routes: Routes = [
  {
    path: 'baies',
    component: BaieComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaieRoutingModule { }
