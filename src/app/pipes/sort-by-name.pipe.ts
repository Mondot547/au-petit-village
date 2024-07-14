import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sortByName",
})
export class SortByNamePipe implements PipeTransform {
  transform(products: any[], searchText: string): any[] {
    if (!products || !searchText) {
      return products; // Retourne tous les produits si la liste est vide ou si le texte de recherche est vide
    }

    // Filtrer les produits dont le nom inclut le texte de recherche
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()),
    );

    // Si aucun produit ne correspond au critère de recherche, retourner le produit n'a pas été trouvé
    if (filteredProducts.length === 0) {
      return [{ name: "Produit non trouvé !" }];
    }

    return filteredProducts;
  }
}
