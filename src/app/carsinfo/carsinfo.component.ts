import { CarsService } from '../services/cars.service';
import { Component, OnInit } from '@angular/core';
import { allCars } from '../services/allCars';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
interface cars {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-carsinfo',
  templateUrl: './carsinfo.component.html',
  styleUrls: ['./carsinfo.component.css'],
})
export class CarsinfoComponent {
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
  filterCarByCarModel1: any;
  tempFiltered: any = [];

  constructor(private carsService: CarsService, private http: HttpClient) {}

  ngOnInit(): void {
    let headers = new HttpHeaders({
      'x-rapidapi-host': 'random-facts2.p.rapidapi.com',
      'x-rapidapi-key': 'your-api-key',
    });

    this.carsService.getAllCars().subscribe((x) => {
      this.allCars = x.car_db_metric;
      this.allCars.forEach((make) => {
        this.makes.push(make.make);
      });
      this.filtered = new Set([...this.makes]);
    });

    this.carsService.getAllCars().subscribe((x) => {
      this.allCars = x.car_db_metric;
      this.allCars.forEach((model) => {
        this.filteredModels.push(model.model);
      });
      this.models = new Set([...this.filteredModels]);
    });
  }

  fetchCars() {
    this.carsService.fetchCars();
  }

  compare() {
    Swal.fire('Success', `Compared sucessfuly!`, 'success');
  }
  selectedCar(car: any) {
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
  }
  selectedCars(car: any) {
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
  }

  allModels: any = [];
  allModels1: any = [];
  noDuplicatefilterCarByModel: any;
  noDuplicatefilterCarByModel1: any;
  filterCarByModel: any;
  SelectMake(e: any) {
    this.filterCarByModel = this.allCars.filter((x) => x.make === e.value);
    this.filterCarByModel.forEach((car: any) => {
      this.allModels.push(car.model);
    });
    this.noDuplicatefilterCarByModel = new Set([...this.allModels]);
  }

  filterCarByModel1: any;
  SelectMake1(e: any) {
    this.filterCarByModel1 = this.allCars.filter((x) => x.make === e.value);
    this.filterCarByModel1.forEach((car: any) => {
      this.allModels1.push(car.model);
    });
    this.noDuplicatefilterCarByModel1 = new Set([...this.allModels1]);
  }

  SelectModel(e: any) {
    this.filterCarByCarModel = this.allCars.filter((x) => x.model === e.value);
  }

  SelectModel1(e: any) {
    this.filterCarByCarModel1 = this.allCars.filter((x) => x.model === e.value);
  }
  removeCar(car: allCars, id_trim: any) {
    this.selectedCar1 = this.selectedCar1.filter(
      (item: allCars) => item.id_trim !== car.id_trim
    );
  }

  removeCar1(car2: allCars, id_trim: any) {
    this.selectedCar2 = this.selectedCar2.filter(
      (item: allCars) => item.id_trim !== car2.id_trim
    );
  }

  selectedMake: any = [];
  getCarById(id: any) {
    this.selectedMake.push(id);
  }

  filteredCarByModel: any = [];
  selectedCarByModel: any = [];
  getSelectedCarByModel(id: any) {
    this.carsService.fetchCars().subscribe((car) => {
      this.selectedCarByModel.push(car);
      this.filteredCarByModel = this.selectedCarByModel.find(
        (item: allCars) => item.make === id
      );
    });
    return this.selectedCarByModel;
  }
}
