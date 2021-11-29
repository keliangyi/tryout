/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MinmaxComponent } from './minmax.component';

describe('MinmaxComponent', () => {
  let component: MinmaxComponent;
  let fixture: ComponentFixture<MinmaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinmaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinmaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
