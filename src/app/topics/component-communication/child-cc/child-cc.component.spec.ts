import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCcComponent } from './child-cc.component';

describe('ChildCcComponent', () => {
  let component: ChildCcComponent;
  let fixture: ComponentFixture<ChildCcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
