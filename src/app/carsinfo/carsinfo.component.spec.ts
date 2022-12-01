import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsinfoComponent } from './carsinfo.component';

describe('CarsinfoComponent', () => {
  let component: CarsinfoComponent;
  let fixture: ComponentFixture<CarsinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
