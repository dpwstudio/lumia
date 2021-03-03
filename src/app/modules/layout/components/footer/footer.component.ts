import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    phone: ['', Validators.required],
    message: ['', Validators.required]
  });
  loading = false;

  constructor(private formBuilder: FormBuilder, private emailService: EmailService) {}

  ngOnInit(): void {

  }

  sendEmail(): void {
    console.log('Your form data : ', this.contactForm.value);
    // this.emailService.sendEmail(JSON.stringify(this.contactForm.value));
    this.contactForm.reset();
  }


}
