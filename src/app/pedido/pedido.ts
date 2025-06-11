import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [CommonModule, SidebarComponent],
  templateUrl: './pedido.html',
  styleUrl: './pedido.css'
})
export class PedidoComponent {
  pedidos = [
    { id: 1, cliente: 'Cliente 1', fecha: '2023-10-01', estado: 'Pendiente' },
    { id: 2, cliente: 'Cliente 2', fecha: '2023-10-02', estado: 'En Proceso' },
    { id: 3, cliente: 'Cliente 3', fecha: '2023-10-03', estado: 'Completado' },
    { id: 4, cliente: 'Cliente 4', fecha: '2023-10-04', estado: 'Cancelado' }
  ];  

}
