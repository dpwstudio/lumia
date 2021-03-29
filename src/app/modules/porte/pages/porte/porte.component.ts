import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Product } from 'src/app/models/Product.model';

@Component({
  selector: 'app-porte',
  templateUrl: './porte.component.html',
  styleUrls: ['./porte.component.scss']
})
export class PorteComponent implements OnInit {
  doors: Product[] = [];
  showDevis = false;
  product: Product | undefined;

  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Portes d\'entrées Paris, Ile de France – Installateur Agrée – Lumia Ouvertures');
    this.doors = [
      {
        img: 'assets/img/porte/porte-pvc.jpg',
        title: 'Portes d\'entrée en PVC',
        text: 'Les portes fonctionnelles en pvc',
        longText: 'Vous souhaitez miser sur une porte d’entrée PVC plutôt qu’une porte en bois pour remplacer votre porte en alu sur mesure? Chez Lumia Ouvertures , nos gammes déclinées dans ce matériau sont disponibles sous la forme de portes d’entrée vitrées, semi-vitrées et pleines. Traditionnelles ou plus classiques, elles affichent toutes un cadre à la fois solide, résistant au temps et aux chocs ainsi que d’excellentes qualités d’isolation thermique et sonore. Faites appel à KparK afin d’opter pour une porte d’entrée en poly sur mesure associée à une pose à votre domicile réalisée par des professionnels.'
      },
      {
        img: 'assets/img/porte/porte-alu.jpg',
        title: 'Portes d\'entrée en Aluminium',
        text: 'Les portes en aluminium modernes et prestigieuses',
        longText: 'Afin que vous puissiez avoir le choix en matière d’esthétique comme de budget, nous vous proposons des portes d’entrée aluminium qui peuvent être vitrées, semi-vitrées ou encore pleines. Misant sur une véritable personnalisation ainsi que votre sécurité, notre gamme de portes sur mesure en aluminium est également garante d’excellentes performances en termes d’isolation. Pièce maîtresse de votre façade et élément primordial de votre confort, votre porte d’entrée en alu Lumia Ouvertures  saura répondre à toutes vos exigences et bénéficie d’une pose de qualité.'
      },
      {
        img: 'assets/img/porte/porte-bois.jpg',
        title: 'Portes d\'entrée en Bois',
        text: 'Les portes en bois dans un style classique',
        longText: 'Vous êtes avant tout à la recherche d’une porte d’entrée vous permettant d’ajouter une note de chaleur et d’élégance à votre maison ou votre appartement ? Pourquoi ne pas miser sur un matériau tel que le bois ? Associant sécurité, isolation thermique et acoustique, et design élégant, votre porte d’entrée bois se décline en version pleine ou semi-vitrée, selon vos envies. Chez Lumia Ouvertures , nous vous garantissons de profiter d’une porte d’entrée sur mesure ainsi que d’une pose réalisée par des professionnels. Avec de nombreux accessoires et options à la clé, votre porte d’entrée bois est 100 % personnalisable.'
      },
      // {
      //   img: 'assets/img/porte/porte-1.png',
      //   title: 'Portes de garage sectionnelles',
      //   text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      // },
      // {
      //   img: 'assets/img/porte/porte-2.png',
      //   title: 'Portes de garage enroulables',
      //   text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      // },
      // {
      //   img: 'assets/img/porte/porte-3.png',
      //   title: 'Portes de garage industrielles',
      //   text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incdidunt ut laboret dolor magna ut consequat siad esqudiat dolor'
      // },
    ]
  }

  toggleModal(product: Product | undefined) {
    this.product = product;
  }

}
