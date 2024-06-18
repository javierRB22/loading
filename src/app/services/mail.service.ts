import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private http = inject(HttpClient);
  private url: string = environment.API_URL;

  constructor() {}

  enviarCorreo(data: any): Observable<any> {
    return this.http.post(`${this.url}/contact/sendEmail`, data);
  }
}
