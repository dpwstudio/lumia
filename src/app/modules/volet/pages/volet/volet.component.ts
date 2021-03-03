import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-volet',
  templateUrl: './volet.component.html',
  styleUrls: ['./volet.component.scss']
})
export class VoletComponent implements OnInit {
  shutters: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.shutters = [
      {
        img: 'assets/img/volets/volet-4.png',
        title: 'Volets roulants',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/volets/volet-4.png',
        title: 'Volets de système monobloc',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/volets/volet-4.png',
        title: 'Volets encastrés',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/volets/volet-4.png',
        title: 'Brise soleil orientable',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      }
    ];
  }

}
