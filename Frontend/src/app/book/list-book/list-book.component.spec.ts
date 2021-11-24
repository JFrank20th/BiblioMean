import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBookComponent1 } from './list-book.component';

describe('ListBookComponent', () => {
  let component: ListBookComponent1;
  let fixture: ComponentFixture<ListBookComponent1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBookComponent1 ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBookComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
