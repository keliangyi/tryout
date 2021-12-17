import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeTwoComponent } from './subscribe-two.component';

describe('SubscribeTwoComponent', () => {
  let component: SubscribeTwoComponent;
  let fixture: ComponentFixture<SubscribeTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
