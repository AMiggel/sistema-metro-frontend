import { Component, OnInit } from '@angular/core';
import {Usuario} from './usuario';
import { from } from 'rxjs';
import { UsuarioService } from './usuario.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
 
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario [];
  ocultar:boolean=false;
  usuario: Usuario = new Usuario()
  closeResult: string


  constructor(private usuarioService: UsuarioService,
    private router:Router) { }

 
  ngOnInit() {
   this.usuarioService.getUsuarios().subscribe(
     usuarios => this.usuarios= usuarios
   );
 
  }


  delete(usuario:Usuario): void{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    })
  
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        this.usuarioService.delete(usuario.id).subscribe(
          Response =>{
            this.usuarios = this.usuarios.filter(us => us!== usuario)
            swalWithBootstrapButtons.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )}
        )
       
      } 
    })
  }

}
