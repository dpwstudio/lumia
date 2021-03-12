import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmailService } from 'src/app/services/email/email.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contactForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    subject: ['', Validators.required],
    message: ['', Validators.required]
  });
  loading = false;
  showSuccess = false;
  showError = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private emailService: EmailService) { }

  ngOnInit(): void {

  }

  sendEmail(): void {
    if (!this.contactForm.valid) {
      this.showError = true;
    } else {
      this.loading = true;
      this.emailService.sendEmailFromContact(JSON.stringify(this.contactForm.value)).subscribe(res => {
        this.loading = false;
        this.showSuccess = true;
        this.contactForm.reset();
        this.router.navigate(['/']);
      });
    }
  }


}
