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
  selected: any = [];
  selected1: any = [];
  selectedCar1: any = [];
  selectedCar2: any = [];
  selectedCarModels: any = [];
  selectedCarModels2: any = [];
  allCars: allCars[] = [];
  makes: any = [];
  filtered: any = [];
  model:any = []
  model1:any=[]

  constructor(
    private carsService: CarsService,
    private http: HttpClient
  ) {}

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
  }

  fetchCars() {
    this.carsService.fetchCars();
  }
  compare(){
    Swal.fire(
      'Success',
      `Compared sucessfuly!`,
      'success'
    );
  }
  selectedCar(car:any) {
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
      Swal.fire('Warning', `Maximum 1 cars`, 'warning');
    }

    console.log({ selectedCar1: this.selectedCar1 });
  }
  selectedCars(car:any) {
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
      Swal.fire('Warning', `Maximum 1 cars`, 'warning');
    }

    console.log({ selectedCar1: this.selectedCar2 });
  }



  removeCar(car: allCars, id_trim: any) {
    this.selectedCar1 = this.selectedCar1.filter(
      (item: allCars) => item.id_trim !== car.id_trim
    );
    console.log(this.selectedCar1);
  }
  removeCar1(car2: allCars, id_trim: any) {
    this.selectedCar2 = this.selectedCar2.filter(
      (item: allCars) => item.id_trim !== car2.id_trim
    );
    console.log(this.selectedCar2);
  }

  selectedBrand(cars: allCars, event:Event) {
    this.selected = this.allCars.filter((car) => {
       car.model === cars.model;
    });
    this.model = this.selected
  }
  selectedBrand1(car1: allCars, event:Event) {
    this.selected1 = this.allCars.filter((car) => {
      car.model === car1.model;
   });
   this.model1 = this.selected1
  }


filterCarByModel:any;
SelectMake(e:any){
    this.filterCarByModel = this.allCars.filter(x=> x.make === e.value)
console.log(this.filterCarByModel);
}
filterCarByModel1:any;
SelectMake1(e:any){
    this.filterCarByModel1 = this.allCars.filter(x=> x.make === e.value)
console.log(this.filterCarByModel1);
}
}
