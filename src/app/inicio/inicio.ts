import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../login/login';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './inicio.html',
  styleUrls: ['./inicio.css']
})
export class InicioComponent {
}
