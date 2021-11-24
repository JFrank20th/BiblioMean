import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProveedorComponent } from './register-proveedor.component';

describe('RegisterProveedorComponent', () => {
  let component: RegisterProveedorComponent;
  let fixture: ComponentFixture<RegisterProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
