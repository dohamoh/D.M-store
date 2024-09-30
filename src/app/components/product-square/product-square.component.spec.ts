import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSquareComponent } from './product-square.component';

describe('ProductSquareComponent', () => {
  let component: ProductSquareComponent;
  let fixture: ComponentFixture<ProductSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSquareComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
