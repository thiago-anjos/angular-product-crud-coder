import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreatComponent } from './product-creat.component';

describe('ProductCreatComponent', () => {
  let component: ProductCreatComponent;
  let fixture: ComponentFixture<ProductCreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCreatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
