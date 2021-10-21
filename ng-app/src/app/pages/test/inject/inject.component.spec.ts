import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectComponent } from './inject.component';

describe('InjectComponent', () => {
  let component: InjectComponent;
  let fixture: ComponentFixture<InjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
