import { HttpClient } from '@angular/common/http';
import { Component, getNgModuleById } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allCars } from 'src/app/services/allCars';
import { CarsService } from './../../services/cars.service';
import { CarsinfoComponent } from '../../carsinfo/carsinfo.component';

@Component({
  selector: 'app-single-car',
  templateUrl: './single-car.component.html',
  styleUrls: ['./single-car.component.css'],
})
export class SingleCarComponent {
  constructor(
    private carsService: CarsService,
    private http: HttpClient,
    private route: ActivatedRoute // private carsinfoComponent: CarsinfoComponent
  ) {}

  marka = '';
  allMarks: any = [];
  allCars: allCars[] = [];
  selectedMark: any = [];
  noDuplicateSelectedMark: any = [];
  noDuplicateSelectedCarModels: any = [];

  car: any = [];
  allModels: any = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((data: any) => {
      this.marka = data.params.name;
      console.log({ marka: this.marka });
      this.carsService.fetchCars().subscribe((cars: any) => {
        this.allCars = cars.car_db_metric;
        console.log({ cars: this.allCars });
        this.selectedMark = this.allCars.filter(
          (car) => car.make === this.marka
        );

        // this.selectedMark.forEach((mark: any) => {
        //   this.selectedMark = mark.model;
        //   this.noDuplicateSelectedMark = new Set([...this.selectedMark]);
        //   console.log(this.selectedMark);
        //   console.log(this.noDuplicateSelectedMark);
        // });
      });
    });
  }
  // ngOnInit(): void {
  //   this.route.paramMap.subscribe((data: any) => {
  //     this.marka = data.params.name;
  //     console.log({ marka: this.marka });
  //     this.carsService.fetchCars().subscribe(
  //       (cars: any) => {
  //         // Use the filter() method to filter the array of cars
  //         // by the make property and the value of this.marka
  //         this.allCars = cars.car_db_metric;

  //         console.log({ cars: this.allCars });

  //         if (this.selectedMark) {
  //           this.selectedMark = this.allCars.filter(
  //             (car) => car.make === this.marka
  //           );
  //         }

  //         this.selectedMark.forEach((car: any) => {
  //           this.selectedMark.push(car.model);
  //         });

  //         console.log({ modle: this.selectedMark });
  //         this.noDuplicatefilterCarByModel = new Set([...this.selectedMark]);
  //         console.log(this.noDuplicatefilterCarByModel);
  //       }
  //       // Log the filtered array of cars
  //     );
  //   });
  // }
  // getMark(name: any) {
  //   this.carsService.getAllCars().subscribe((car) => {
  //     this.allCars = car;
  //     console.log(this.allCars);
  //   });
  // }
}
