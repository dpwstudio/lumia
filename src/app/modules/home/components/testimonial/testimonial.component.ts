import { Component, OnInit } from '@angular/core';


interface Comment {
  message: string,
  author: string,
  date: string
}

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent implements OnInit {
  comments: Comment[] = [];
  constructor() { }

  ngOnInit(): void {
    this.comments = [
      {
        message: 'Très bonnes prestations ! [petite suggestion: assurer meilleure formation des poseurs pour des points particuliers (exemple: coupes d\’onglet particulières…) ; équipement mieux adapté…]',
        author: 'Mélanie.G',
        date: '01/01/2021'
      },
      {
        message: 'Bonne réactivité sur le devis, délai de livraison respecté, pose propre et soignée.',
        author: 'Jeanne.V',
        date: '01/01/2021'
      },
      {
        message: 'Engagement pris et tenu dans les délais. Bravo pour la qualité, la pose et l’efficacité des employés (léger problème de réglage, réglé dès le lendemain de notre demande).',
        author: 'Franck.A',
        date: '01/01/2021'
      },
      {
        message: 'J’ai fais appel à Lumia ouverture pour la qualité de leur produits, l’assurance que leurs salariés sontcompétents et le conseil qu’ils m’ont apporté. Ayant une parcelle particulière, ils ont su me dire quel était le meilleur choix de portail.Le portail coulissant de 5m est adapté et a été réalisé sur mesure. Beau travail !',
        author: 'Bleck.A',
        date: '01/01/2021'
      }
    ]
  }

}
