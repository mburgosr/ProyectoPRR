import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  onSubmit() {
    if (this.email && this.password) {
      // Aquí puedes llamar a tu servicio PHP para validar
      alert(`Correo: ${this.email}\nContraseña: ${this.password}`);
      // Más adelante integración real
    }
  }
}
