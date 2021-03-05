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
        img: 'assets/img/baies/baie-pvc.jpg',
        title: 'Baies coulissantes PVC',
        text: 'Baie coulissante à levage faite en PVC'
      },
      {
        img: 'assets/img/baies/baie-alu.jpg',
        title: 'Baies coulissantes Aluminium',
        text: 'Baie coulissante à levage faite en aluminium'
      },
      {
        img: 'assets/img/baies/baie-bois.jpg',
        title: 'Baies coulissantes bois',
        text: 'Baie coulissante à levage faite en bois'
      }
    ];
  }


}
