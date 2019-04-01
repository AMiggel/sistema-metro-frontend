import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private usuario:Usuario = new Usuario()
  private titulo:string = "Crear usuario"

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

  public create(): void{
    this.usuarioService.create(this.usuario)
    .subscribe( usuario => {
        this.router.navigate(['/usuarios'])
        Swal.fire('Nuevo usuario Registrado', `Usuario ${usuario.nombre} creado con éxito`, 'success')
      }
    );
  }

  update():void{
    this.usuarioService.update(this.usuario)
    .subscribe( usuario => {
      this.router.navigate(['/usuarios'])
      Swal.fire('Usuario actualizado','El usuario ha sido modificado con éxito','success')
    });
  }
  
 


}
