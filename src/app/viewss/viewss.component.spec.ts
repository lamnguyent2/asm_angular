import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewssComponent } from './viewss.component';

describe('ViewssComponent', () => {
  let component: ViewssComponent;
  let fixture: ComponentFixture<ViewssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
