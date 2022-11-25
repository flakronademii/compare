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
  selected: any = [];
  selectedCar1: any = [];
  selectedValue: any;
  selectedCarModels: any = [];
  selectedOption: string = '';
  printedOption: any = [];
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

    if (this.selectedCar1.length >= 3) {
      this.searchText = '';
      this.selectedCar1.length = 3;
      Swal.fire('Warning', `Maximum 3 cars`, 'warning');
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

  selectedBrand(car: Cars, event: Event) {
    // this.selected = this.cars.filter((cars) => {
    //   return cars.car === car.car;
    // });
    this.selected = event?.target;
    console.log({ model: this.selected.car });
    this.selected.forEach((x: any) => {
      console.log({ x });
      this.selectedCarModels.push(x);
      console.log({ sc: this.selectedCarModels });
      console.log(this.selected);
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
