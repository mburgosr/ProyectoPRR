import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css']
})
export class SidebarComponent {
  
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout(); // Limpiar el estado de autenticación
    this.router.navigate(['/']); //Inicio
  }
}