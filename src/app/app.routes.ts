import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { ClienteComponent } from './cliente/cliente';


export const routes: Routes = [
  { path: 'cliente', component: ClienteComponent },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '' }  //Redirige otras rutas a login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }