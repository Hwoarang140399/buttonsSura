import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryButtonsComponent } from './primary-buttons.component';

describe('PrimaryButtonsComponent', () => {
  let component: PrimaryButtonsComponent;
  let fixture: ComponentFixture<PrimaryButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
