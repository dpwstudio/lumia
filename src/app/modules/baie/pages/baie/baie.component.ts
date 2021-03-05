import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-baie',
  templateUrl: './baie.component.html',
  styleUrls: ['./baie.component.scss']
})
export class BaieComponent implements OnInit {
  berries: Product[] = [];
  showDevis = false;

  constructor() { }

  ngOnInit(): void {
    this.berries = [
      {
        img: 'assets/img/baies/baie-1.jpg',
        title: 'Baies coulissantes PVC',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/baies/baie-1.jpg',
        title: 'Baies coulissantes Aluminium',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/baies/baie-1.jpg',
        title: 'Baies coulissantes bois',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      }
    ];
  }


}
