import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentStylingComponent } from './component-styling.component';

describe('ComponentStylingComponent', () => {
  let component: ComponentStylingComponent;
  let fixture: ComponentFixture<ComponentStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentStylingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
