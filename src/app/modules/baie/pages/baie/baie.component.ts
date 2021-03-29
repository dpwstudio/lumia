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
  product: Product | undefined;

  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Baies coulissantes Paris, Ile de France – Installateur Agrée – Lumia Ouvertures');
    this.berries = [
      {
        img: 'assets/img/baies/baie-pvc.jpg',
        title: 'Baies coulissantes PVC',
        text: 'Baie coulissante à levage faite en PVC',
        longText: 'Profitez de davantage de lumière jour après jour grâce à une baie vitrée en PVC Lumia Ouvertures  spécialement conçue pour vous. Sur mesure, votre baie vitrée répond à toutes vos exigences, que vous désiriez des profilés fins et élégants, une bonne isolation, mais aussi pour de grands vitrages. Faites appel à nos services associant une baie vitrée PVC sur mesure à la pose par un professionnel certifié . À vos côtés, nous nous assurons du bon déroulement de votre projet afin de garantir votre entière satisfaction.'
      },
      {
        img: 'assets/img/baies/baie-alu.jpg',
        title: 'Baies coulissantes Aluminium',
        text: 'Baie coulissante à levage faite en aluminium',
        longText: 'Faites le choix d’un matériau robuste et durable en privilégiant une baie vitrée en aluminium. Les modèles Lumia Ouvertures  sont conçus sur mesure afin de répondre pleinement à vos attentes et bénéficient d’une pose réalisée par des professionnels. Contactez-nous afin de planifier la venue d’un conseiller Lumia Ouvertures  qui sera en mesure de vous présenter nos différentes  gammes de baies vitrées en aluminium sur mesure . Selon votre budget, vos envies de décoration ainsi que vos exigences en matière d’isolation, il organisera avec vous l’intégralité de vos travaux.'
      },
      {
        img: 'assets/img/baies/baie-bois.jpg',
        title: 'Baies coulissantes bois/Aluminium',
        text: 'Baie coulissante à levage faite en bois',
        longText: 'Vous désirez allier modernité et tradition lors de l’achat de votre baie vitrée sur mesure ? Chez Lumia Ouvertures , nous vous proposons une gamme de baies vitrées en bois et aluminium correspondant à vos attentes. Bénéficiez d’un accompagnement personnalisé pendant toute la durée de votre projet grâce à la venue d’un conseiller Lumia Ouvertures  à votre domicile : il saura répondre à toutes vos questions et vous faire profiter de son expertise.'
      }
    ];
  }

  toggleModal(product: Product | undefined) {
    this.product = product;
  }


}
