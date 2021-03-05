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
        img: 'assets/img/fenetre/fenetre-pvc.jpg',
        title: 'Fenêtres PVC',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/fenetre/fenetre-pvc.jpg',
        title: 'Fenêtres PVC - Aluminium',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/fenetre/fenetre-pvc.jpg',
        title: 'Fenêtres bois',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/fenetre/fenetre-pvc.jpg',
        title: 'Fenêtres bois - Aluminium',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      },
      {
        img: 'assets/img/fenetre/fenetre-pvc.jpg',
        title: 'Fenêtres aluminium',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      }
    ]
  }
}
