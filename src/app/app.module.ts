import { SingleCarComponent } from './carsinfo/SingleMakeComponent/single-car.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './CarCompareComponent/cars.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarsService } from './services/cars.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe } from './search.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LoaderComponent } from './LoaderComponent/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './HeaderComponent/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TheftcarComponent } from './TheftCarComponent/theftcar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CarsinfoComponent } from './carsinfo/carsinfo.component';
import { SingleModelComponentComponent } from './carsinfo/SingleModelComponent/single-model-component.component';
import { CartableComponent } from './carsinfo/SingleCarInfoTableComponent/cartable.component';
import { WelcomeComponent } from './WelcomeComponent/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    SearchPipe,
    LoaderComponent,
    HeaderComponent,
    TheftcarComponent,
    CarsinfoComponent,
    SingleCarComponent,
    SingleModelComponentComponent,
    CartableComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatFormFieldModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
