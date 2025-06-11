import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio';
import { LoginComponent } from './login/login';
import { ClienteComponent } from './cliente/cliente';
import { PedidoComponent } from './pedido/pedido';
import { VolquetaComponent } from './volqueta/volqueta';
import { RegistroVolquetaComponent } from './volqueta/registro-volqueta/registro-volqueta'; // Subcomponente para registro de volqueta
import { ReporteDiarioComponent } from './volqueta/reporte-diario/reporte-diario'; // Subcomponente para reporte diario
import { FacturaComponent } from './factura/factura';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'volqueta', component: VolquetaComponent, children: [  // Componente principal para volquetas
      { path: 'registro-volqueta', component: RegistroVolquetaComponent },  // Ruta para registro
      { path: 'reporte-diario', component: ReporteDiarioComponent }  // Ruta para reporte
  ]},
  { path: 'factura', component: FacturaComponent }, 
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }