import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-porte',
  templateUrl: './porte.component.html',
  styleUrls: ['./porte.component.scss']
})
export class PorteComponent implements OnInit {
  doors: Product[] = [];
  showDevis = false;

  constructor() { }

  ngOnInit(): void {
    this.doors = [
      {
        img: 'assets/img/porte/porte-1.png',
        title: 'Portes d\'entrée en PVC',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/porte/porte-2.png',
        title: 'Portes d\'entrée en Aluminium',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/porte/porte-3.png',
        title: 'Portes d\'entrée en Bois',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/porte/porte-1.png',
        title: 'Portes de garage sectionnelles',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/porte/porte-2.png',
        title: 'Portes de garage enroulables',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/porte/porte-3.png',
        title: 'Portes de garage industrielles',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
    ]
  }
}
