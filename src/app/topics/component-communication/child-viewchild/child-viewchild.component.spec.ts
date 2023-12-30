import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildViewchildComponent } from './child-viewchild.component';

describe('ChildViewchildComponent', () => {
  let component: ChildViewchildComponent;
  let fixture: ComponentFixture<ChildViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildViewchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildViewchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
