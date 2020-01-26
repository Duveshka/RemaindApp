/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditReminderComponent } from './editReminder.component';

describe('EditReminderComponent', () => {
  let component: EditReminderComponent;
  let fixture: ComponentFixture<EditReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReminderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
