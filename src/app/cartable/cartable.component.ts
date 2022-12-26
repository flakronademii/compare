import { allCars } from './../services/allCars';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarsService } from '../services/cars.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cartable',
  templateUrl: './cartable.component.html',
  styleUrls: ['./cartable.component.css'],
})
export class CartableComponent implements OnInit {
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
      this.modelet = data.params.id;
      console.log({ data });
      this.carsService.fetchCars().subscribe((cars: any) => {
        this.allCars = cars.car_db_metric;
        console.log({ cars: this.allCars });
        this.SelectedModel = this.allCars.filter(
          (car: allCars) => car.id_trim == this.modelet
        );
        console.log(this.SelectedModel);
      });
    });
  }
}
