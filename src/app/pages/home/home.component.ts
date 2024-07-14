import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ProductService } from "../../services/product.service";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faSort } from "@fortawesome/free-solid-svg-icons";

import { Router } from "@angular/router";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
}

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  searchQuery: string = "";
  faSearch = faSearchengin;
  faArrows = faSort;
  products: any[] = [];
  suggestions: any[] = [];
  filteredProducts: any[] = [];
  sortOrder: string = "asc";
  searchText: string = "";

  constructor(
    private meta: Meta,
    private titleService: Title,
    private productService: ProductService,
    private router: Router,
  ) {}

  onSearch() {
    const product = this.products.find(
      (p) => p.name.toLowerCase() === this.searchQuery.toLowerCase(),
    );

    if (product) {
      this.router.navigate(["/product", product.id]);
    } else {
      alert("Produit non trouvé !");
    }
  }

  ngOnInit(): void {
    this.titleService.setTitle("Accueil - AuPetitVillage");
    this.meta.addTag({
      name: "description",
      content:
        "Bienvenue sur la page d'accueil d'AuPetitVillage. Découvrez nos produits et services.",
    });

    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.filteredProducts = products;
    });
  }

  updateSuggestions() {
    const query = this.searchQuery.toLowerCase();
    this.suggestions = this.products.filter((product) =>
      product.name.toLowerCase().includes(query),
    );
    this.filteredProducts = this.suggestions;
  }
}
