import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showContact = false;

  constructor(
    private title: Title
  ) { }

  ngOnInit(): void {
    this.title.setTitle('Installateur Fenêtres, Portes-fenêtres, Baie coulissantes, Porte d\'entrée, Portails, Clôtures Paris, Ile de France – Lumia Ouvertures');
  }

}
