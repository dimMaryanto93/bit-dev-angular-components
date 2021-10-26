import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDatatablesComponent } from './angular-datatables.component';

describe('AngularDatatablesComponent', () => {
  let component: AngularDatatablesComponent;
  let fixture: ComponentFixture<AngularDatatablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDatatablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDatatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
