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
        message: 'Les gros chantiers ne leur font pas peur . Bravo à toute l équipe !',
        author: 'Jeanne M',
        date: '03/09/2020'
      },
      {
        message: 'Équipe commerciale vraiment a l Ecoute . Techniciens au top . Bravo !',
        author: 'Pierre K',
        date: '06/05/2020'
      },
      {
        message: 'Du sur-mesure quasi au prix du standard . Incroyable !',
        author: 'Jean T',
        date: '26/04/2020'
      },
      {
        message: 'Rien à dire. Qualité et professionnalisme au rdv.',
        author: 'Daniel R',
        date: '22/04/2020'
      },
      {
        message: 'Rdv pris en 48h, commande validee dans la foulée, fénetres posées en temps record. Je recommande.',
        author: 'Eloïse F',
        date: '18/04/2020'
      },
      {
        message: 'On a fait un devis chez tryba, Lumia ouvertures était beaucoup beaucoup moins cher pour une qualité équivalente et un travail irréprochable.',
        author: 'Fabien B',
        date: '15/04/2020'
      },
      {
        message: 'Une équipe réactive et très professionnelle. Parfait !',
        author: 'Louis B',
        date: '08/04/2020'
      },
      {
        message: 'Des prix attractifs pour une qualité irréprochable. Je recommande fortement !',
        author: 'Aurelie M',
        date: '02/04/2020'
      },
    ];
  }

}
