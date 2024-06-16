import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateStatComponent } from './template-stat.component';

describe('TemplateStatComponent', () => {
  let component: TemplateStatComponent;
  let fixture: ComponentFixture<TemplateStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
