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
        img: 'assets/img/volets/volet-4.png',
        title: 'Volets en PVC',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/volets/volet-4.png',
        title: 'Volets en aluminium',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/volets/volet-4.png',
        title: 'Volets en bois',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      }
    ];
  }

}
