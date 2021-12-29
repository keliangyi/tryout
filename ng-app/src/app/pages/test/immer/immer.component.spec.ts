/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ImmerComponent } from './immer.component';

describe('ImmerComponent', () => {
  let component: ImmerComponent;
  let fixture: ComponentFixture<ImmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
