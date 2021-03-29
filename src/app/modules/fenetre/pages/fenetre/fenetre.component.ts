import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-fenetre',
  templateUrl: './fenetre.component.html',
  styleUrls: ['./fenetre.component.scss']
})
export class FenetreComponent implements OnInit {
  windows: Product[] = [];
  showDevis = false;
  product: Product | undefined;

  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Fenêtres et portes-fenêtres Paris, Ile de France – Installateur Agrée – Lumia Ouvertures');
    this.windows = [
      {
        img: 'assets/img/fenetre/fenetre-pvc2.jpg',
        title: 'Fenêtres PVC',
        text: 'Pour vos fenêtres en PVC , une très bonne isolation thermique et acoustique s\'associe à des atouts indéniables...',
        longText: 'Pour vos fenêtres en PVC , une très bonne isolation thermique et acoustique s\'associe à des atouts indéniables en matière de luminosité et de facilité d’entretien. Nos models  ont été conçus afin de répondre à vos attentes, quel que soit votre niveau d’exigence. Confiez-nous votre projet de pose de fenêtre PVC afin que nous prenions en charge l’intégralité de vos travaux, pour une pose sur mesure de très grande qualité. Recyclables, nos fenêtres en polychlorure de vinyle (PVC) vous offrent un excellent rapport qualité/prix tout en préservant l’environnement.'
      },
      {
        img: 'assets/img/fenetre/fenetre-alu.jpg',
        title: 'Fenêtres Aluminium',
        text: 'Afin que vous puissiez profiter d’un vrai choix lors de l’achat de vos fenêtres en aluminium sur mesure...',
        longText: 'Afin que vous puissiez profiter d’un vrai choix lors de l’achat de vos fenêtres en aluminium sur mesure, nous vous proposons plusieurs choix de gammes. Bénéficiant toutes d’une fabrication de haute qualité et de bonnes performances en matière d’isolation, elles vous permettent d’associer robustesse et finesse des profilés. Grâce à ces fenêtres laissez entrer la lumière tout en ajoutant un réel cachet à votre habitation : parcourez le champ des possibles en découvrant nos très nombreuses options de personnalisation.'
      },
      {
        img: 'assets/img/fenetre/fenetre-bois.jpg',
        title: 'Fenêtres bois',
        text: 'Pour l’achat de fenêtres en bois, nous avons souhaité que vous puissiez disposer d’un large choix de modèles...',
        longText: 'Pour l’achat de fenêtres en bois, nous avons souhaité que vous puissiez disposer d’un large choix de modèles. Avec Lumia ouvertures, vous bénéficiez de l’assurance de fenêtres en bois en mesure d’allier efficacité d’isolation thermique et acoustique ainsi que de conférer une ambiance chaleureuse à votre habitation. Faites confiance à Lumia ouvertures pour l\'achat de fenêtres sur mesure répondant à vos exigences grâce à un matériau vivant, isolant naturel parfaitement étanche à l’eau et à l’air.'
      }
    ]
  }

  toggleModal(product: Product | undefined) {
    this.product = product;
  }

}
