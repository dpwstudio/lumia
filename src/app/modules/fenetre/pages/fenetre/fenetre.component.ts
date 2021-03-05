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
        img: 'assets/img/fenetre/fenetre-pvc2.jpg',
        title: 'Fenêtres PVC',
        text: 'Bestseller- les fenêtres choisies par près de 85% d’investisseurs'
      },
      {
        img: 'assets/img/fenetre/fenetre-alu.jpg',
        title: 'Fenêtres Aluminium',
        text: 'Un design impressionnant et de très grandes possibilités de construction'
      },
      {
        img: 'assets/img/fenetre/fenetre-bois.jpg',
        title: 'Fenêtres bois',
        text: 'Un choix intemporel – la nature qui est toujours à la mode'
      }
    ]
  }

}
