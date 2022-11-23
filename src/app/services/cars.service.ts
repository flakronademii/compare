import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cars } from './cars';
@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private http: HttpClient, handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  private LOCALHOST_URL = environment.LOCALHOST_URL;
  cars: Cars[] = [];
  fetchCars() {
    return this.http.get<any>(`${this.LOCALHOST_URL}/get-cars`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      }),
    });
  }

  disappearCars() {
    this.cars.length = 0;
  }
}
