import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'priceFilter',
})
export class PriceFilterPipe implements PipeTransform {
  transform(
    products: Product[],
    minPrice: number,
    maxPrice: number
  ): Product[] {
    if (!products || !minPrice || !maxPrice) return products;
    return products.filter(
      (item) => item.unitPrice >= minPrice && item.unitPrice <= maxPrice
    );
  }
}
