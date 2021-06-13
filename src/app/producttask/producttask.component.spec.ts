import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttaskComponent } from './producttask.component';

describe('ProducttaskComponent', () => {
  let component: ProducttaskComponent;
  let fixture: ComponentFixture<ProducttaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducttaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
