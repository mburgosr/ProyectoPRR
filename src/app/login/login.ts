import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
import * as bootstrap from 'bootstrap'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  user: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    const isValid = this.authService.login(this.user, this.password);

    if (isValid) {
      const modalElement = document.getElementById('loginModal');
      const modalBackdrop = document.querySelector('.modal-backdrop');

      if (modalElement) {
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
          modal.hide();  // Ahora TypeScript está seguro que modal no es null
        }
      }

      if (modalBackdrop) {
        modalBackdrop.remove(); // Remueve manualmente el backdrop oscuro
      }

      // Espera un pequeño retraso antes de navegar para asegurarte de que el modal cierre primero
      setTimeout(() => {
        this.router.navigate(['/cliente']);
      }, 300);

    } else {
      alert('Credenciales incorrectas');
    }
  }
 
}
