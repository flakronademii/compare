import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { TheftcarComponent } from './theftcar/theftcar.component';

const routes: Routes = [
  {path:'' , component:CarsComponent},
  {path:'theftcar', component:TheftcarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
