import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomechinhComponent } from './homechinh.component';

describe('HomechinhComponent', () => {
  let component: HomechinhComponent;
  let fixture: ComponentFixture<HomechinhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomechinhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomechinhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
