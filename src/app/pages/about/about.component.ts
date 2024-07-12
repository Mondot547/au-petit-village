import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss",
})
export class AboutComponent {
  imageCreateur = "../../../assets/créateurAsterixObelix.jpg";

  constructor(
    private meta: Meta,
    private titleService: Title,
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle("À propos - AuPetitVillage");
    this.meta.updateTag({
      name: "description",
      content:
        "En savoir plus sur AuPetitVillage. Notre histoire, nos valeurs et notre mission.",
    });
  }
}
