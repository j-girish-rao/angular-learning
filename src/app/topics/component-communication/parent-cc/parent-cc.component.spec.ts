import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentCcComponent } from './parent-cc.component';

describe('ParentCcComponent', () => {
  let component: ParentCcComponent;
  let fixture: ComponentFixture<ParentCcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentCcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
