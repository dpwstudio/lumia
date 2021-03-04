import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendEmailFromContact(data: any): Observable<any> {
    console.log('data', data);
    return this.http.post(environment.mailContact, data);
  }

  sendEmailFromDevis(data: any): Observable<any> {
    console.log('data', data);
    return this.http.post(environment.mailDevis, data);
  }
}
