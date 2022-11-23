import { CarsService } from './../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { Cars } from '../services/cars';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  // cars: Cars[] = [];
  cars: any;

  constructor(private carsService: CarsService, private http: HttpClient) {}

  ngOnInit(): void {
    // let headers = new HttpHeaders({
    //   'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
    //   'x-rapidapi-key': 'your-api-key',
    // });
    // this.http
    //   .get<any>('http://localhost:5003/get-cars', {
    //     headers: headers,
    //   })
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    this.carsService.fetchCars().subscribe((response) => {
      this.cars = response;
      console.log({ response });
    });
    console.log(this.cars );
  }

  fetchCars() {
    this.carsService.fetchCars();
  }
}
