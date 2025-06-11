import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-cliente',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './cliente.html',
  styleUrls: ['./cliente.css']
})
export class ClienteComponent {
  clientes = [
    { cedula: '0887654321', nombre: 'Cliente 1', tipo: 'Fijo', telefono: '0987654321', correo: 'cliente1@gmail.com' },
    { cedula: '1212345678', nombre: 'Cliente 2', tipo: 'Ocasional', telefono: '0912345678', correo: 'cliente2@gmail.com' },
    { cedula: '1413578642', nombre: 'Cliente 3', tipo: 'Fijo', telefono: '0913578642', correo: 'cliente3@gmail.com' },
    { cedula: '0912345678', nombre: 'Cliente 4', tipo: 'Ocasional', telefono: '0924687531', correo: 'cliente4@gmail.com' }
  ];
}
