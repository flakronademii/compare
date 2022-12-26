import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleModelComponentComponent } from './single-model-component.component';

describe('SingleModelComponentComponent', () => {
  let component: SingleModelComponentComponent;
  let fixture: ComponentFixture<SingleModelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleModelComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleModelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
