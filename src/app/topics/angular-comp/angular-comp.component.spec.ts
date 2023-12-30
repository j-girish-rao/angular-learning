import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularCompComponent } from './angular-comp.component';

describe('AngularCompComponent', () => {
  let component: AngularCompComponent;
  let fixture: ComponentFixture<AngularCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
