import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] // Utilisation de styleUrls avec un 's' à la fin
})
export class HeaderComponent {
  Logo: string = '../../../assets/Logo_au petit village.jpg'; // Assurez-vous que le chemin est correct ici
}
