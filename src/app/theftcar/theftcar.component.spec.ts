import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheftcarComponent } from './theftcar.component';

describe('TheftcarComponent', () => {
  let component: TheftcarComponent;
  let fixture: ComponentFixture<TheftcarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheftcarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheftcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
