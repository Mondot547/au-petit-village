import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service'; // Importez le service ProductService

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId!: string;
  product: any; // Déclaration du produit

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService // Injection du service ProductService
  ) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id') || '';
    this.loadProductDetails();
  }

  loadProductDetails(): void {
    this.productService.getProductById(this.productId).subscribe(
      (product) => {
        this.product = product;
      },
      (error) => {
        console.error('Error loading product details:', error);
        // Gestion des erreurs si nécessaire
      }
    );
  }
}
