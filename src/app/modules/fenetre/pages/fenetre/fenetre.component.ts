import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-fenetre',
  templateUrl: './fenetre.component.html',
  styleUrls: ['./fenetre.component.scss']
})
export class FenetreComponent implements OnInit {
  windows: Product[] = [];
  showDevis = false;

  constructor() { }

  ngOnInit(): void {
    this.windows = [
      {
        img: 'assets/img/fenetre/fenetre-pvc.jpg',
        title: 'Fenêtres PVC',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/fenetre/fenetre-pvc.jpg',
        title: 'Fenêtres Aluminium',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/fenetre/fenetre-pvc.jpg',
        title: 'Fenêtres bois',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/fenetre/fenetre-pvc.jpg',
        title: 'Portes-fenêtres PVC',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/fenetre/fenetre-pvc.jpg',
        title: 'Portes-fenêtres Aluminium',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/fenetre/fenetre-pvc.jpg',
        title: 'Portes-fenêtres bois',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      }
    ]
  }

}
