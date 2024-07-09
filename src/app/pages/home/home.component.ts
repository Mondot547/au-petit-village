import { Component, OnInit } from '@angular/core';

interface Product {
  id: string;
  name: string;
  price: number;
  img: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [
    { id: '_1', name: 'Product A', price: 30, img: 'assets/asterix.jpg' },
    { id: '_2', name: 'Product B', price: 20, img: 'assets/asterix.jpg' },
    { id: '_3', name: 'Product C', price: 50, img: 'assets/asterix.jpg' },
    { id: '_4', name: 'Product D', price: 59.99, img: 'assets/asterix.jpg' },
    { id: '_5', name: 'Product E', price: 25.50, img: 'assets/asterix.jpg' },
    { id: '_6', name: 'Product F', price: 10.99, img: 'assets/asterix.jpg' },
    { id: '_7', name: 'Product G', price: 6, img: 'assets/asterix.jpg' }
  ];
  sortOrder: string = 'asc';
  searchText: string = '';

  constructor() {}

  ngOnInit(): void {}
}
