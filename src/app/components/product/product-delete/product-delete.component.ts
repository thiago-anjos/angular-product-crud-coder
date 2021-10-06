import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CancelService } from 'app/services/cancel.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.sass'],
})
export class ProductDeleteComponent implements OnInit {
  constructor(
    private cancelService: CancelService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  product!: Product;

  ngOnInit(): void {
    this.product = this.route.snapshot.data.deleteProductResolver;
  }

  goBack(): void {
    this.cancelService.goBack();
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage('Deletado com sucesso');
      this.cancelService.goBack();
    });
  }
}
