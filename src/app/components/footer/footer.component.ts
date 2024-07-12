import { Component } from "@angular/core";
import {
  faFacebook,
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent {
  faFacebook = faFacebookSquare;
  faInstagram = faInstagram;
}
