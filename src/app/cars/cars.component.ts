import { CarsService } from './../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { Cars } from '../services/cars';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  // cars: Cars[] = [];
  cars: Cars[] = [];
  tempArray: Cars[] = [];
  searchText = '';
  searchText2 = '';
  selectedCar1: any = [];

  constructor(private carsService: CarsService, private http: HttpClient) {}

  ngOnInit(): void {
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
      'x-rapidapi-key': 'your-api-key',
    });

    this.carsService.fetchCars().subscribe((response) => {
      console.log(response.cars);
      this.cars = response.cars;
      console.log({ cars: this.cars });
    });
  }
  fetchCars() {
    this.carsService.fetchCars();
  }

  kthirabet() {
    this.carsService.fetchCars().subscribe((response) => {
      this.cars = response.cars;
      window.location.reload();

      console.log({ cars2: this.cars });
    });
  }

  selectedCar(car: Cars, id: any) {
    const selectedProduct = this.cars.find((cars) => cars.id === car.id);
    let inCart = this.selectedCar1.some((x: any) => x.id === car.id);

    if (inCart) {
      Swal.fire(
        'Warning',
        `${car.car} ${car.car_model} is already choosen`,
        'warning'
      );
    } else {
      this.selectedCar1.push(selectedProduct);
    }

    if (this.selectedCar1.length > 3) {
      this.selectedCar1.splice(3);
      this.cars = [];
      Swal.fire(
        'Warninig',
        'You can choose a maximum of three cars to compare. Thank you!',
        'info'
      );
    }

    if (this.selectedCar1.length >= 3) {
      this.tempArray = this.cars;
      console.log({ temp: this.tempArray });
      this.cars.length = 0;
      console.log({ cars: this.cars });
    }

    console.log({ selectedCar1: this.selectedCar1 });
  }
}
