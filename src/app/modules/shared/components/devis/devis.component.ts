import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email/email.service';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit {
  @Input() isVisible = false;
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
  devisForm = this.formBuilder.group({
    category: ['', Validators.required],
    productModel: ['', Validators.required],
    qty: ['', Validators.required],
    projectType: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    cpVille: ['', Validators.required],
    description: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) { }

  ngOnInit(): void {
  }

  toggleDevis(): void {
    this.isVisible = false;
    this.toggle.emit(this.isVisible);
  }

  sendEmail(): void {
    console.log('Your form data : ', this.devisForm.value);
    // this.emailService.sendEmailDevis(JSON.stringify(this.devisForm.value));
    this.devisForm.reset();
  }


  setCategory(category: any): void {
    this.devisForm.controls.category.setValue(category);
  }
  setProductModel(productModel: any): void {
    this.devisForm.controls.productModel.setValue(productModel);
  }
  setQty(qty: any): void {
    this.devisForm.controls.qty.setValue(qty);
  }
  setProjectType(projectType: any): void {
    this.devisForm.controls.projectType.setValue(projectType);
  }


}
