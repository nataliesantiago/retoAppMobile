import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHobbieComponent } from './modal-hobbie.component';

describe('ModalHobbieComponent', () => {
  let component: ModalHobbieComponent;
  let fixture: ComponentFixture<ModalHobbieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHobbieComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHobbieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
