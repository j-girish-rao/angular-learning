import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterDataComponent } from './router-data.component';

describe('RouterDataComponent', () => {
  let component: RouterDataComponent;
  let fixture: ComponentFixture<RouterDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouterDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
