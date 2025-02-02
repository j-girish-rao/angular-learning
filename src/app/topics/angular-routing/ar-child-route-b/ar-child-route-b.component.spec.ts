import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArChildRouteBComponent } from './ar-child-route-b.component';

describe('ArChildRouteBComponent', () => {
  let component: ArChildRouteBComponent;
  let fixture: ComponentFixture<ArChildRouteBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArChildRouteBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArChildRouteBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
