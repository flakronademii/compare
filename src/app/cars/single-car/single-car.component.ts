import { HttpClient } from '@angular/common/http';
import { Component, getNgModuleById } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { allCars } from 'src/app/services/allCars';
import { CarsService } from './../../services/cars.service';
import { CarsinfoComponent } from '../../carsinfo/carsinfo.component';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';

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
      this.carsService.fetchCars().subscribe((cars: any) => {
        this.allCars = cars.car_db_metric;
        console.log({ cars: this.allCars });
        this.selectedMark = this.allCars.filter(
          (car) => car.make === this.marka
        );

        this.selectedMark.map((car: any) => {
          this.allModels.push(car.model);
        });

        this.noDuplicateSelectedMark = new Set([...this.allModels]);
        console.log(this.noDuplicateSelectedMark);
      });
    });
  }
}
