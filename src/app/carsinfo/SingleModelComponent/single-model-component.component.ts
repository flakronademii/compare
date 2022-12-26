import { Component } from '@angular/core';
import { CarsService } from '../../services/cars.service';
import { ActivatedRoute } from '@angular/router';
import { allCars } from 'src/app/services/allCars';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single-model-component',
  templateUrl: './single-model-component.component.html',
  styleUrls: ['./single-model-component.component.css'],
})
export class SingleModelComponentComponent {
  constructor(
    private carsService: CarsService,
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  modelet = '';
  allModels: any = [];
  allCars: allCars[] = [];
  SelectedModel: any = [];
  noDuplicateSelectedModel: any = [];
  noDuplicateSelectedCarModels: any = [];

  ngOnInit(): void {
    this.route.paramMap.subscribe((data: any) => {
      this.modelet = data.params.model;
      this.carsService.fetchCars().subscribe((cars: any) => {
        this.allCars = cars.car_db_metric;
        this.SelectedModel = this.allCars.filter(
          (car: allCars) => car.model == this.modelet
        );

      });
    });
  }
}

