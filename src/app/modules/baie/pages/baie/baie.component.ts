import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-baie',
  templateUrl: './baie.component.html',
  styleUrls: ['./baie.component.scss']
})
export class BaieComponent implements OnInit {
  berries: Product[] = [];
  showDevis = false;

  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Baies coulissantes Paris, Ile de France – Installateur Agrée – Lumia Ouvertures');
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
