import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

     // Inyecta el servicio Router en el constructor
  constructor(private router: Router) {}

  // Método para redirigir a la otra ruta
  redirigirAOtraRuta() {
    this.router.navigate(['/otra-ruta']);
  }
}
