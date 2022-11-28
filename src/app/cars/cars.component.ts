import { LoaderService } from './../services/loader.service';
import { CarsService } from './../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { Cars } from '../services/cars';
import { allCars } from '../services/allCars';
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
  selected: any = [];
  selected2: any = [];
  selected3: any = [];
  selectedCar1: any = [];
  selectedCar2: any = [];
  selectedCar3: any = [];
  selectedCarModels: any = [];
  selectedCarModels2: any = [];
  selectedCarModels3: any = [];
  selectedValue: any;
  allCars: allCars[] = [];
  selectedOption: string = '';
  printedOption: any = [];
  makes: any = [];
  filtered: any = [];
  constructor(
    private carsService: CarsService,
    private loaderService: LoaderService,
    private http: HttpClient
  ) {}

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
    this.carsService.getAllCars().subscribe((x) => {
      console.log(x);
      this.allCars = x.car_db_metric;
      this.allCars.forEach((make) => {
        this.makes.push(make.make);
        console.log({ makes: this.makes });
      });
      // const filtered = this.makes.filter((make: any) => make.make === x.make);
      this.filtered = new Set([...this.makes]);
      console.log({ filtered: this.filtered });
    });
  }

  fetchCars() {
    this.carsService.fetchCars();
  }

  selectedCar(car: allCars, id_trim: any) {
    const selectedProduct = this.allCars.find(
      (cars) => cars.id_trim === car.id_trim
    );

    let inCart = this.selectedCar1.some((x: any) => x.id_trim === car.id_trim);
    // const data = JSON.parse(localStorage.getItem('selectedCars')!);
    let selected = this.allCars.filter((cars) => {
      return cars.make === car.make;
    });
    if (inCart) {
      Swal.fire(
        'Warning',
        `${car.make} ${car.model} ${car.generation} is already choosen`,
        'warning'
      );
    } else {
      this.selectedCar1.push(selectedProduct);
      // localStorage.setItem('selectedCars', JSON.stringify(this.selectedCar1));
    }

    if (this.selectedCar1.length > 1) {
      this.selectedCar1.length = 1;
      Swal.fire('Warning', `Maximum 1 cars`, 'warning');
    }

    console.log({ selectedCar1: this.selectedCar1 });
  }

  selectedCars1(car2: Cars, id: any) {
    const selectedProduct2 = this.cars.find((cars) => cars.id === car2.id);
    let inCart = this.selectedCar2.some((x: any) => x.id === car2.id);
    // const data = JSON.parse(localStorage.getItem('selectedCars')!);
    let selected2 = this.cars.filter((cars) => {
      return cars.car === car2.car;
    });
    if (inCart) {
      Swal.fire(
        'Warning',
        `${car2.car} ${car2.car_model} ${car2.car_model_year} is already choosen`,
        'warning'
      );
    } else {
      this.selectedCar2.push(selectedProduct2);
      // localStorage.setItem('selectedCars', JSON.stringify(this.selectedCar1));
    }

    if (this.selectedCar2.length > 1) {
      this.selectedCar2.length = 1;
      Swal.fire('Warning', `Maximum 1 cars`, 'warning');
    }

    console.log({ selectedCar2: this.selectedCar2 });
  }

  selectedCars3(car3: Cars, id: any) {
    const selectedProduct3 = this.cars.find((cars) => cars.id === car3.id);
    let inCart = this.selectedCar3.some((x: any) => x.id === car3.id);
    // const data = JSON.parse(localStorage.getItem('selectedCars')!);
    let selected3 = this.cars.filter((cars) => {
      return cars.car === car3.car;
    });
    if (inCart) {
      Swal.fire(
        'Warning',
        `${car3.car} ${car3.car_model} ${car3.car_model_year} is already choosen`,
        'warning'
      );
    } else {
      this.selectedCar3.push(selectedProduct3);
      // localStorage.setItem('selectedCars', JSON.stringify(this.selectedCar1));
    }

    if (this.selectedCar3.length > 1) {
      this.selectedCar3.length = 1;
      Swal.fire('Warning', `Maximum 1 cars`, 'warning');
    }

    console.log({ selectedCar3: this.selectedCar3 });
  }

  removeCar(car: Cars, id: any) {
    this.selectedCar1 = this.selectedCar1.filter(
      (item: Cars) => item.id !== car.id
    );
    // localStorage.removeItem('selectedCars');
    console.log(this.selectedCar1);
    // this.selectedCar(car, id);
  }
  removeCar1(car2: Cars, id: any) {
    this.selectedCar2 = this.selectedCar2.filter(
      (item: Cars) => item.id !== car2.id
    );
    // localStorage.removeItem('selectedCars');
    console.log(this.selectedCar2);
    // this.selectedCar(car, id);
  }
  removeCar2(car3: Cars, id: any) {
    this.selectedCar3 = this.selectedCar3.filter(
      (item: Cars) => item.id !== car3.id
    );
    // localStorage.removeItem('selectedCars');
    console.log(this.selectedCar3);
    // this.selectedCar(car, id);
  }

  selectedBrand(cars: allCars) {
    this.selected = this.allCars.filter((cars) => {
      return cars.model === cars.model;
    });
    console.log({ model: this.selected.model });
    this.selected.forEach((x: any) => {
      console.log({ x });
      this.selectedCarModels.push(x);
      console.log({ sc: this.selectedCarModels });
      console.log(this.selected);
    });
  }

  selectedBrand2(car1: allCars) {
    this.selected2 = this.allCars.filter((cars) => {
      return cars.model === car1.model;
    });
    console.log({ model: this.selected2.car });
    this.selected2.forEach((x: any) => {
      console.log({ x });
      this.selectedCarModels2.push(x);
      console.log({ sc: this.selectedCarModels2 });
      console.log(this.selected2);
    });
  }

  selectedBrand3(car2: Cars) {
    this.selected3 = this.cars.filter((cars) => {
      return cars.car === car2.car;
    });
    console.log({ model: this.selected3.car });
    this.selected3.forEach((x: any) => {
      console.log({ x });
      this.selectedCarModels3.push(x);
      console.log({ sc: this.selectedCarModels3 });
      console.log(this.selected3);
    });
  }

  // print(car: Cars) {
  //   this.printedOption = this.selectedOption;
  //   console.log(this.printedOption);
  //   this.printedOption = this.cars.filter((cars) => {
  //     return cars.car === car.car;
  //   });
  //   console.log({ po: this.printedOption });
  // }
}
