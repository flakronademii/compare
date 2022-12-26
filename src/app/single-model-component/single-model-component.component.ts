import { Component } from '@angular/core';
import { CarsService } from '../services/cars.service';
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
      console.log({ data });
      this.carsService.fetchCars().subscribe((cars: any) => {
        this.allCars = cars.car_db_metric;
        console.log({ cars: this.allCars });
        this.SelectedModel = this.allCars.filter(
          (car: allCars) => car.model == this.modelet
        );
        console.log(this.SelectedModel);
        console.log({ data });
      });
    });
  }
}

//   selectedCarModel: any = [];
//   allModels: any = [];

//   ngOnInit(): void {
//     this.getCarMySelectedModel();
//   }
//   getCarMySelectedModel() {
//     this.carsService.fetchCars().subscribe((x) => {
//       this.selectedCarModel.push(x);

//       this.selectedCarModel.map((car: any) => {
//         this.allModels.push(car.model);
//       });
//       console.log(this.allModels);
//       this.selectedCarModel.filter((car: any) => car.model === 'A1');
//       console.log({ scbm: this.selectedCarModel });
//     });
//   }
// }
