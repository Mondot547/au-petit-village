import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { ProductService } from "../../services/product.service";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { ActivatedRoute, Router } from "@angular/router";

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
  products: Product[] = [];
  suggestions: Product[] = [];
  filteredProducts: Product[] = [];
  sortOrder: string = "asc";
  searchText: string = "";

  constructor(
    private meta: Meta,
    private titleService: Title,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("Accueil - AuPetitVillage");
    this.meta.addTag({
      name: "description",
      content:
        "Bienvenue sur la page d'accueil d'AuPetitVillage. Découvrez nos produits et services.",
    });

    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;
        this.filteredProducts = products; // Initialisation de filteredProducts avec tous les produits
      },
      (error) => {
        console.error("Erreur lors du chargement des produits", error);
      },
    );

    this.route.paramMap.subscribe((params) => {
      const productId = params.get("id");
      if (productId) {
        this.loadProductDetails(productId);
      }
    });
  }

  private loadProductDetails(productId: string): void {
    this.productService.getProductById(productId).subscribe(
      (product) => {
        if (product) {
          this.products = [product]; // Mettre à jour les produits avec le produit chargé
        } else {
          console.error(`Produit avec l'ID ${productId} non trouvé`);
        }
      },
      (error) => {
        console.error(
          "Erreur lors du chargement des détails du produit",
          error,
        );
      },
    );
  }

  onSearch(): void {
    const query = this.searchQuery.toLowerCase().trim();
    if (!query) {
      this.filteredProducts = this.products; // Réinitialiser filteredProducts avec tous les produits si la recherche est vide
      this.suggestions = [];
      return;
    }

    this.suggestions = this.products.filter((product) =>
      product.name.toLowerCase().includes(query),
    );

    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(query),
    );

    if (
      this.filteredProducts.length === 1 &&
      this.filteredProducts[0].name.toLowerCase() === query
    ) {
      const productId = this.filteredProducts[0].id;
      this.router.navigate(["/product", productId]);
    }
  }
}
