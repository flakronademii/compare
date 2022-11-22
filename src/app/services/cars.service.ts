import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private http: HttpClient, handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  fetchCars() {
    return this.http.get<any>('http://localhost:5003/get-cars', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      }),
    });
  }
}
