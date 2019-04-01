import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component'
import { FooterComponent} from './footer/footer.component';
import { UsuariosComponent } from './usuarios/usuarios.component'
import { UsuarioService } from './usuarios/usuario.service';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { FormComponent } from './usuarios/form/form.component'
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DetalleUsuarioComponent } from './usuarios/detalle-usuario/detalle-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    UsuariosComponent,
    FormComponent,
    DetalleUsuarioComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
