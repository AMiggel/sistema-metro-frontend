import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clienteMetro-app';
  alumno:String='Antonio'
  descripcion:String='practicando construyendo una app para el sistema metro de medellin'
}
