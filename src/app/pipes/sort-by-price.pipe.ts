import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice'
})
export class SortByPricePipe implements PipeTransform {
  transform(products: any[], order: string): any[] {
    if (!products || !order) {
      return products;
    }

    if (order === 'asc') {
      return products.sort((a, b) => a.price - b.price);
    } else if (order === 'desc') {
      return products.sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  }
}
