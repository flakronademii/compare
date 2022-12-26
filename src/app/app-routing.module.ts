import { CartableComponent } from './carsinfo/SingleCarInfoTableComponent/cartable.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './CarCompareComponent/cars.component';
import { SingleCarComponent } from './carsinfo/SingleMakeComponent/single-car.component';
import { CarsinfoComponent } from './carsinfo/carsinfo.component';
import { TheftcarComponent } from './TheftCarComponent/theftcar.component';
import { SingleModelComponentComponent } from './carsinfo/SingleModelComponent/single-model-component.component';
import { WelcomeComponent } from './WelcomeComponent/welcome.component';

const routes: Routes = [
  { path: '' ,component:WelcomeComponent },
  { path: 'cars', component: CarsinfoComponent },
  { path: 'compare', component: CarsComponent },
  { path: 'theftcar', component: TheftcarComponent },
  { path: 'car/:name', component: SingleCarComponent },
  { path: ':model', component: SingleModelComponentComponent },
  { path: 'table/:id', component: CartableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
