import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FormComponent } from './usuarios/form/form.component';
import { DetalleUsuarioComponent } from './usuarios/detalle-usuario/detalle-usuario.component';


const routes: Routes = [
  {path:'', redirectTo:'/usuarios', pathMatch:'full'},
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'usuarios/form', component: FormComponent},
  {path: 'usuarios/form/:id', component: FormComponent},
  {path: 'usuarios/detalle/:id', component:DetalleUsuarioComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: 
  [
    RouterModule
  ]
})
export class AppRoutingModule { }
