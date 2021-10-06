import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.sass'],
})
export class ProductCrudComponent implements OnInit {
  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de produtos',
      icon: 'storefront',
      routeUrl: '/products',
    };
  }

  ngOnInit(): void {}
}
