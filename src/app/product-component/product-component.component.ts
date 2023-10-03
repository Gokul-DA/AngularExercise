import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product-component.component.1.html',
  styleUrls: ['./product-component.component.css'],
})
export class ProductComponent {
  products: Product[];
  singleProduct: Product = new Product(
    1,
    'Description 123',
    10,
    100,
    'Category 123',
    'Manufacturer 123'
  );
  constructor() {
    this.products = [
      new Product(1, 'Description 1', 10, 100, 'Category 1', 'Manufacturer 1'),
      new Product(2, 'Description 2', 10, 100, 'Category 2', 'Manufacturer 2'),
      new Product(3, 'Description 3', 10, 100, 'Category 3', 'Manufacturer 3'),
      new Product(4, 'Description 4', 10, 100, 'Category 4', 'Manufacturer 4'),
      new Product(5, 'Description 5', 10, 100, 'Category 5', 'Manufacturer 5'),
    ];
  }
  createProducts(product1: Product) {
    this.products.push(product1);
  }
}
