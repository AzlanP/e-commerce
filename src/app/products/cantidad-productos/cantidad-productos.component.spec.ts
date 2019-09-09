import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadProductosComponent } from './cantidad-productos.component';

describe('CantidadProductosComponent', () => {
  let component: CantidadProductosComponent;
  let fixture: ComponentFixture<CantidadProductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantidadProductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantidadProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
