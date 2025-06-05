import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  user: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    console.log('Intentando login con', this.user, this.password); //depuracion 

    const isValid = this.authService.login(this.user, this.password);
    if (isValid) {
      console.log('Login exitoso, redirigiendo a clientes...');
      this.router.navigate(['/cliente']);  // Redirige a la página de clientes
    } else {
      console.log('Credenciales incorrectas');
      alert('Credenciales incorrectas');
    }
  }  
}
