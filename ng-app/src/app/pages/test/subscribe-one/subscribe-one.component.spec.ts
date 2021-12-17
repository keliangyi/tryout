import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeOneComponent } from './subscribe-one.component';

describe('SubscribeOneComponent', () => {
  let component: SubscribeOneComponent;
  let fixture: ComponentFixture<SubscribeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribeOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
