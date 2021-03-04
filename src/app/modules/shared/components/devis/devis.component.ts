import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email/email.service';

@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit {
  @Input() isVisible = false;
  @Output() toggle = new EventEmitter<boolean>();
  loading = false;
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

  constructor(private formBuilder: FormBuilder, private router: Router, private emailService: EmailService) { }

  ngOnInit(): void {
  }

  toggleDevis(): void {
    this.isVisible = false;
    if (!this.isVisible) {
      this.showCategory = false;
      this.showProductModel = false;
      this.showQty = false;
      this.showProjectType = false;
      this.devisForm.reset();
    }
    this.toggle.emit(this.isVisible);
  }

  sendEmail(): void {
    if (!this.devisForm.valid) {
      this.showError = true;
    } else {
      this.loading = true;
      this.emailService.sendEmailFromDevis(JSON.stringify(this.devisForm.value)).subscribe(res => {
        console.log('res', res);
        this.loading = false;
        this.showSuccess = true;
        this.devisForm.reset();
        this.isVisible = false;
        this.toggle.emit(this.isVisible);
        this.router.navigate(['/']);
      });
    }
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
