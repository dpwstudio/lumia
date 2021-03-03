import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoletComponent } from './pages/volet/volet.component';

const routes: Routes = [
  {
    path: 'volets',
    component: VoletComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoletRoutingModule { }
