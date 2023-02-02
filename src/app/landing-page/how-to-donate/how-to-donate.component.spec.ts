/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HowToDonateComponent } from './how-to-donate.component';

describe('HowToDonateComponent', () => {
  let component: HowToDonateComponent;
  let fixture: ComponentFixture<HowToDonateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToDonateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
