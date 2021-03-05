import { Component, OnInit } from '@angular/core';


interface Window {
  img: string,
  title: string,
  text: string
}
@Component({
  selector: 'app-portail',
  templateUrl: './portail.component.html',
  styleUrls: ['./portail.component.scss']
})
export class PortailComponent implements OnInit {
  windows: Window[] = [];
  showDevis = false;

  constructor() { }

  ngOnInit(): void {
    this.windows = [
      {
        img: 'assets/img/portail/portail-pvc.jpg',
        title: 'Portails PVC',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/portail/portail-alu.jpg',
        title: 'Portails Aluminium',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/portail/portail-bois.jpg',
        title: 'Portails bois',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/portail/cloture-pvc.jpg',
        title: 'Clôture PVC',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/portail/cloture-alu.jpg',
        title: 'Clôture aluminium',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      }
    ]
  }
}
