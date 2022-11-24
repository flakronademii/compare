import { LoaderService } from './../services/loader.service';
import { CarsService } from './../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { Cars } from '../services/cars';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
interface cars {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {
  cars: Cars[] = [];
  tempArray: Cars[] = [];
  searchText = '';
  searchText2 = '';
  selectBrand = '';
  selected: any;
  selectedCar1: any = [];
  selectedValue :any;

  isLoading = false;
  constructor(
    private carsService: CarsService,
    private loaderService: LoaderService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
      'x-rapidapi-key': 'your-api-key',
    });

    this.carsService.fetchCars().subscribe((response) => {
      console.log(response.cars);
      this.cars = response.cars;
      console.log({ cars: this.cars });
    });
    // this.carsService.getAPI();
  }
  fetchCars() {
    this.carsService.fetchCars();
    this.isLoading = false;
  }

  kthirabet() {
    this.isLoading = false;
    this.carsService.fetchCars().subscribe((response) => {
      this.cars = response.cars;
      // window.location.reload();

      console.log({ cars2: this.cars });
    });
  }

  selectedCar(car: Cars, id: any) {
    const selectedProduct = this.cars.find((cars) => cars.id === car.id);
    let inCart = this.selectedCar1.some((x: any) => x.id === car.id);
    // const data = JSON.parse(localStorage.getItem('selectedCars')!);
    let selected = this.cars.filter((cars) => {
      return cars.car === car.car;
    });
    if (inCart) {
      Swal.fire(
        'Warning',
        `${car.car} ${car.car_model} ${car.car_model_year} is already choosen`,
        'warning'
      );
    } else {
      this.selectedCar1.push(selectedProduct);
      // localStorage.setItem('selectedCars', JSON.stringify(this.selectedCar1));
    }

    if (this.selectedCar1.length >= 2) {
      this.searchText = '';

    }

    console.log({ selectedCar1: this.selectedCar1 });
  }

  removeCar(car: Cars, id: any) {
    this.selectedCar1 = this.selectedCar1.filter(
      (item: Cars) => item.id !== car.id
    );
    // localStorage.removeItem('selectedCars');
    console.log(this.selectedCar1);
    // this.selectedCar(car, id);
  }

  selectedBrand(car_model: any, car: Cars) {
    this.selected = this.cars.filter((cars) => {
      return cars.car === car.car;
    });
    console.log({ model: this.selected });
  }
}
