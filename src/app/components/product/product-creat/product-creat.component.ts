import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-creat',
  templateUrl: './product-creat.component.html',
  styleUrls: ['./product-creat.component.sass'],
})
export class ProductCreatComponent implements OnInit {
  product: Product = {
    name: '',
    price: null,
  };

  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado');
      this.router.navigate(['/products']);
    });
  }

  cancelProductCreate(): void {
    this.router.navigate(['/products']);
  }
}
