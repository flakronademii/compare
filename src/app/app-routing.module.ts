import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { CarsinfoComponent } from './carsinfo/carsinfo.component';
import { TheftcarComponent } from './theftcar/theftcar.component';

const routes: Routes = [
  { path: '', component: CarsinfoComponent },
  { path: 'compare', component: CarsComponent },
  { path: 'theftcar', component: TheftcarComponent },
  { path: 'car/:id', component: TheftcarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
