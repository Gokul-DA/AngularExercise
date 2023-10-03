import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product-component.component.3.html',
  styleUrls: ['./product-component.component.css'],
})
export class ProductComponent {
  products: Product[];
  categories: string[] = ['Category 1', 'Category 2', 'Category 3'];
  selectedCategory: string = 'Category 1';
  minPrice: number = 1;
  maxPrice: number = 1000;
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
      new Product(
        1,
        'Description 1',
        1000,
        100,
        'Category 1',
        'Manufacturer 1'
      ),
      new Product(2, 'Description 2', 502, 100, 'Category 2', 'Manufacturer 2'),
      new Product(3, 'Description 3', 123, 100, 'Category 1', 'Manufacturer 3'),
      new Product(4, 'Description 4', 852, 100, 'Category 2', 'Manufacturer 4'),
      new Product(5, 'Description 5', 134, 100, 'Category 3', 'Manufacturer 5'),
    ];
  }
  createProducts(product1: Product) {
    this.products.push(product1);
  }
}
