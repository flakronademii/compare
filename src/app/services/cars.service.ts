import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { allCars } from '../services/allCars';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor(private http: HttpClient, handler: HttpBackend) {
    this.http = new HttpClient(handler);
  }

  private LOCALHOST_URL = environment.LOCALHOST_URL;
  allCars: allCars[] = [];
  fetchCars() {
    return this.http.get<any>(`${this.LOCALHOST_URL}/get-cars`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      }),
    });
  }

  getAllCars() {
    return this.http.get<any>(`${this.LOCALHOST_URL}/all`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      }),
    });
  }

  getSingleCar(car: any) {
    return this.http.get<any>(`${this.LOCALHOST_URL}/car/`, car.make);
  }

  deleteCar(id: any) {
    return this.http.get<any>(`${this.LOCALHOST_URL}/`, id);
  }

  getAPI() {
    return this.http
      .get<any>('https://car-data.p.rapidapi.com/cars/types')
      .subscribe((x) => {
        console.log({ x });
      });
  }
}
