import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-volet',
  templateUrl: './volet.component.html',
  styleUrls: ['./volet.component.scss']
})
export class VoletComponent implements OnInit {
  shutters: Product[] = [];
  showDevis = false;
  constructor() { }

  ngOnInit(): void {
    this.shutters = [
      {
        img: 'assets/img/volets/volet-encastre.png',
        title: 'Volets roulants encastrés',
        text: 'Montage de l\'extérieur de la fenêtre sous la façade'
      },
      {
        img: 'assets/img/volets/volet-monobloc.png',
        title: 'Volets roulants monobloc',
        text: 'Installation directement sur la fenêtre, 2 formes du coffre au choix'
      },
      {
        img: 'assets/img/volets/volet-ext.png',
        title: 'Volets roulants extérieurs',
        text: 'Montage sans interférer avec la structure du bâtiment, 3 formes du coffre au choix'
      }
    ];
  }

}
