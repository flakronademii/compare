import { LoaderInterceptorService } from './services/loader-interceptor.service';
import { LoaderService } from './services/loader.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarsService } from './services/cars.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchPipe } from './search.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { TheftcarComponent } from './theftcar/theftcar.component';
@NgModule({
  declarations: [AppComponent, CarsComponent, SearchPipe, LoaderComponent, HeaderComponent, TheftcarComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    NgbModule,
    MatToolbarModule,MatIconModule
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
