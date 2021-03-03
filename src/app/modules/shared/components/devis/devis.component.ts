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
  showCategory = false;
  showProductModel = false;
  showQty = false;
  showProjectType = false;
  showSuccess = false;
  showError = false;
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
    console.log('this.devisForm.valid : ', this.devisForm.valid);

    if (!this.devisForm.valid) {
      this.showError = true;
    }
    // this.emailService.sendEmailDevis(JSON.stringify(this.devisForm.value));
    this.devisForm.reset();
    this.showSuccess = true;
  }


  setCategory(category: any): void {
    this.showCategory = true;
    this.devisForm.controls.category.setValue(category);
  }
  setProductModel(productModel: any): void {
    this.showProductModel = true;
    this.devisForm.controls.productModel.setValue(productModel);
  }
  setQty(qty: any): void {
    this.showQty = true;
    this.devisForm.controls.qty.setValue(qty);
  }
  setProjectType(projectType: any): void {
    this.showProjectType = true;
    this.devisForm.controls.projectType.setValue(projectType);
  }


}
