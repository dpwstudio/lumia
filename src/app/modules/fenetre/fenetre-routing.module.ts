import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FenetreComponent } from './pages/fenetre/fenetre.component';

const routes: Routes = [
  {
    path: 'fenetres',
    component: FenetreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FenetreRoutingModule { }
