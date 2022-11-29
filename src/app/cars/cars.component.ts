import { CarsService } from './../services/cars.service';
import { Component, OnInit } from '@angular/core';
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
  math = Math;
  selected: any = [];
  selected1: any = [];
  selectedCar1: any = [];
  selectedCar2: any = [];
  selectedCarModels: any = [];
  selectedCarModels2: any = [];
  allCars: allCars[] = [];
  makes: any = [];
  filtered: any = [];
  model: any = [];
  model1: any = [];
  models: any = [];
  filteredModels: any = [];
  filterCarByCarModel: any;
  tempFiltered: any = [];

  constructor(private carsService: CarsService, private http: HttpClient) {}

  ngOnInit(): void {
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
      'x-rapidapi-key': 'your-api-key',
    });

    this.carsService.getAllCars().subscribe((x) => {
      console.log(x);
      this.allCars = x.car_db_metric;
      this.allCars.forEach((make) => {
        this.makes.push(make.make);
      });
      this.filtered = new Set([...this.makes]);

      console.log({ filtered: this.filtered });
    });

    this.carsService.getAllCars().subscribe((x) => {
      console.log(x);
      this.allCars = x.car_db_metric;
      this.allCars.forEach((model) => {
        this.filteredModels.push(model.model);
      });
      this.models = new Set([...this.filteredModels]);
      console.log({ models: this.models });
    });
  }

  fetchCars() {
    this.carsService.fetchCars();
  }
  compare() {
    Swal.fire('Success', `Compared sucessfuly!`, 'success');
  }
  selectedCar(car: any) {
    console.log(car);

    const selectedProduct = this.allCars.find(
      (cars) => cars.id_trim === car.value
    );

    let inCart = this.selectedCar1.some((x: any) => x.id_trim === car.value);

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
    }

    if (this.selectedCar1.length > 1) {
      this.selectedCar1.length = 1;
      Swal.fire(
        'Warning',
        `Maximum 2 cars, please remove one to add another!`,
        'warning'
      );
    }

    console.log({ selectedCar1: this.selectedCar1 });
  }
  selectedCars(car: any) {
    console.log(car);

    const selectedProduct = this.allCars.find(
      (cars) => cars.id_trim === car.value
    );

    let inCart = this.selectedCar2.some((x: any) => x.id_trim === car.value);

    if (inCart) {
      Swal.fire(
        'Warning',
        `${car.make} ${car.model} ${car.generation} is already choosen`,
        'warning'
      );
    } else {
      this.selectedCar2.push(selectedProduct);
    }

    if (this.selectedCar2.length > 1) {
      this.selectedCar2.length = 1;
      Swal.fire(
        'Warning',
        `Maximum 2 cars, please remove one to add another!`,
        'warning'
      );
    }

    console.log({ selectedCar1: this.selectedCar2 });
  }

  allModels: any = [];
  noDuplicatefilterCarByModel: any;
  filterCarByModel: any;
  SelectMake(e: any) {
    this.filterCarByModel = this.allCars.filter((x) => x.make === e.value);
    this.filterCarByModel.forEach((car: any) => {
      this.allModels.push(car.model);

      console.log({ car: this.allModels });
    });
    this.noDuplicatefilterCarByModel = new Set([...this.allModels]);

    console.log({
      filterCarByModel: this.filterCarByModel,
      noDuplicatefilterCarByModel: this.noDuplicatefilterCarByModel,
    });
  }

  filterCarByModel1: any;
  SelectMake1(e: any) {
    this.filterCarByModel1 = this.allCars.filter((x) => x.make === e.value);
    console.log(this.filterCarByModel1);
  }

  SelectModel(e: any) {
    this.filterCarByCarModel = this.allCars.filter((x) => x.model === e.value);
    console.log({ asdd: this.filterCarByCarModel });
  }

  removeCar(car: allCars, id_trim: any) {
    this.selectedCar1 = this.selectedCar1.filter(
      (item: allCars) => item.id_trim !== car.id_trim
    );
    console.log(this.selectedCar1);
    this.filterCarByCarModel = [];
    this.models = [];
    this.noDuplicatefilterCarByModel = [];
  }

  removeCar1(car2: allCars, id_trim: any) {
    this.selectedCar2 = this.selectedCar2.filter(
      (item: allCars) => item.id_trim !== car2.id_trim
    );
  }
}
