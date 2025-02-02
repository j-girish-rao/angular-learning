import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArChildRouteAComponent } from './ar-child-route-a.component';

describe('ArChildRouteAComponent', () => {
  let component: ArChildRouteAComponent;
  let fixture: ComponentFixture<ArChildRouteAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArChildRouteAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArChildRouteAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
