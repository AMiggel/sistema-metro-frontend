import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from '../usuario';

import { Router, ActivatedRoute } from '@angular/router';
import { Civica } from '../civica';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {

  usuario:Usuario = new Usuario()
  civica:Civica = new Civica()

  constructor(private usuarioService:UsuarioService,
    private router:Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarUsuario()
  }

  cargarUsuario():void{
    this.activateRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.usuarioService.getUsuario(id).subscribe((usuario) => this.usuario=usuario)
      }
    })
  }

  recargarCivica(): void{
    this.usuarioService.recargarCivica(this.usuario,this.civica)
    .subscribe(civica => {
      this.router.navigate(['/usuarios'])
    })
  }
    
}
