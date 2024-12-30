import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindingChildComponent } from './event-binding-child.component';

describe('EventBindingChildComponent', () => {
  let component: EventBindingChildComponent;
  let fixture: ComponentFixture<EventBindingChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventBindingChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindingChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
