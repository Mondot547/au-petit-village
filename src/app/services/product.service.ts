import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string; // Ajoutez d'autres propriétés de détail du produit si nécessaire
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: '_1', name: 'Product A', image: 'assets/astérix.jpg', price: 30, description: 'Description of Product A' },
    { id: '_2', name: 'Product B', image: 'assets/astérix.jpg', price: 20, description: 'Description of Product B' },
    { id: '_3', name: 'Product C', image: 'assets/astérix.jpg', price: 50, description: 'Description of Product C' },
    { id: '_4', name: 'Product D', image: 'assets/astérix.jpg', price: 59.99, description: 'Description of Product D' },
    { id: '_5', name: 'Product E', image: 'assets/astérix.jpg', price: 25.50, description: 'Description of Product E' },
    { id: '_6', name: 'Product F', image: 'assets/astérix.jpg', price: 10.99, description: 'Description of Product F' },
    { id: '_7', name: 'Product G', image: 'assets/astérix.jpg', price: 6, description: 'Description of Product G' },
  ];

  constructor() {}

  getProductById(id: string): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id));
  }
}
