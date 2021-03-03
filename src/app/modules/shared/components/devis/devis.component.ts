import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit {
  @Input() isVisible: boolean = false;
  @Output() toggle = new EventEmitter<boolean>();
  showCategory = true;
  showFenetre = false;
  showBaie = false;
  showVolet = false;
  showPorte = false;
  showPortail = false;
  showQty = false;
  showProjectType = false;
  showFinalized = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDevis() {
    this.isVisible = false;
    this.toggle.emit(this.isVisible);
  }


}
