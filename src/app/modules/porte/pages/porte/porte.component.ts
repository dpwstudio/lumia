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
        img: 'assets/img/porte/porte-pvc.jpg',
        title: 'Portes d\'entrée en PVC',
        text: 'Les portes fonctionnelles en pvc'
      },
      {
        img: 'assets/img/porte/porte-alu.jpg',
        title: 'Portes d\'entrée en Aluminium',
        text: 'Les portes en aluminium modernes et prestigieuses'
      },
      {
        img: 'assets/img/porte/porte-bois.jpg',
        title: 'Portes d\'entrée en Bois',
        text: 'Les portes en bois dans un style classique'
      },
      // {
      //   img: 'assets/img/porte/porte-1.png',
      //   title: 'Portes de garage sectionnelles',
      //   text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      // },
      // {
      //   img: 'assets/img/porte/porte-2.png',
      //   title: 'Portes de garage enroulables',
      //   text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      // },
      // {
      //   img: 'assets/img/porte/porte-3.png',
      //   title: 'Portes de garage industrielles',
      //   text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      // },
    ]
  }
}
