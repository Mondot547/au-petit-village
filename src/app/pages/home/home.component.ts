import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

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
  products: Product[] = [
    {
      id: "_1",
      name: "Product A",
      price: 30,
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
    },
    {
      id: "_2",
      name: "Product B",
      price: 20,
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
    },
    {
      id: "_3",
      name: "Product C",
      price: 50,
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
    },
    {
      id: "_4",
      name: "Product D",
      price: 59.99,
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
    },
    {
      id: "_5",
      name: "Product E",
      price: 25.5,
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
    },
    {
      id: "_6",
      name: "Product F",
      price: 10.99,
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..",
    },
  ];
  sortOrder: string = "asc";
  searchText: string = "";

  constructor(
    private meta: Meta,
    private titleService: Title,
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("Accueil - AuPetitVillage");
    this.meta.addTag({
      name: "description",
      content:
        "Bienvenue sur la page d'accueil d'AuPetitVillage. Découvrez nos produits et services.",
    });
  }
}
