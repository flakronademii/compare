import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { SingleCarComponent } from './cars/single-car/single-car.component';
import { CarsinfoComponent } from './carsinfo/carsinfo.component';
import { TheftcarComponent } from './theftcar/theftcar.component';

const routes: Routes = [
  { path: '', component: CarsinfoComponent },
  { path: 'compare', component: CarsComponent },
  { path: 'theftcar', component: TheftcarComponent },
  { path: 'car/:name', component: SingleCarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
