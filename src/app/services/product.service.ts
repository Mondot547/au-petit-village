import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string; // Ajoutez d'autres propriétés de détail du produit si nécessaire
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: '_1', name: 'Product A', price: 30, description: 'Description of Product A' },
    { id: '_2', name: 'Product B', price: 20, description: 'Description of Product B' },
    { id: '_3', name: 'Product C', price: 50, description: 'Description of Product C' },
    { id: '_4', name: 'Product D', price: 59.99, description: 'Description of Product D' },
    { id: '_5', name: 'Product E', price: 25.50, description: 'Description of Product E' },
    { id: '_6', name: 'Product F', price: 10.99, description: 'Description of Product F' },
    { id: '_7', name: 'Product G', price: 6, description: 'Description of Product G' }
  ];

  constructor() {}

  getProductById(id: string): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
}
