import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-baie',
  templateUrl: './baie.component.html',
  styleUrls: ['./baie.component.scss']
})
export class BaieComponent implements OnInit {
  berries: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.berries = [
      {
        img: 'assets/img/baies/baie-1.jpg',
        title: 'Baie coulissante PVC',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/baies/baie-1.jpg',
        title: 'Baie coulissante PVC - Aluminium',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/baies/baie-1.jpg',
        title: 'Baie coulissante bois',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/baies/baie-1.jpg',
        title: 'Baie coulissante bois - Aluminium',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/baies/baie-1.jpg',
        title: 'Baie coulissante aluminium',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      }
    ];
  }


}
