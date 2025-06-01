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
  user: string = '';
  password: string = '';

  onSubmit() {
    if (this.user && this.password) {
      alert(`Correo: ${this.user}\nContraseña: ${this.password}`); //visualiza lo escrito
      // Validaciones
    }
  }
}
