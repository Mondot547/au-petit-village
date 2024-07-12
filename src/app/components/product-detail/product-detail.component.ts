import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../services/product.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.scss"],
})
export class ProductDetailComponent implements OnInit {
  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get("id");
    if (productId !== null) {
      this.productService.getProductById(productId).subscribe((product) => {
        this.product = product;
      });
    } else {
      console.error("Product ID is null.");
    }
  }
}
