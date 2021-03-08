import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-portail',
  templateUrl: './portail.component.html',
  styleUrls: ['./portail.component.scss']
})
export class PortailComponent implements OnInit {
  portals: Product[] = [];
  showDevis = false;

  constructor() { }

  ngOnInit(): void {
    this.portals = [
      {
        img: 'assets/img/portail/portail-pvc.jpg',
        title: 'Portails PVC',
      },
      {
        img: 'assets/img/portail/portail-alu.jpg',
        title: 'Portails Aluminium',
      },
      {
        img: 'assets/img/portail/portail-bois.jpg',
        title: 'Portails bois',
      },
      {
        img: 'assets/img/portail/cloture-pvc.jpg',
        title: 'Clôture PVC',
      },
      {
        img: 'assets/img/portail/cloture-alu.jpg',
        title: 'Clôture aluminium',
      }
    ]
  }
}
