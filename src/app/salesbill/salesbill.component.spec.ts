import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesbillComponent } from './salesbill.component';

describe('SalesbillComponent', () => {
  let component: SalesbillComponent;
  let fixture: ComponentFixture<SalesbillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesbillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesbillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
