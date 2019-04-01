import { Injectable } from '@angular/core';
import {Usuario} from './usuario';
import { Observable, of, from} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Civica } from './civica';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint:string ='http://localhost:3000/usuario'
  
  private httHeaders = new HttpHeaders({'Content-type': 'application/json'})
  constructor(private http:HttpClient) { }

  getUsuarios():Observable<Usuario[]>{
    //return of(USUARIOS)lo
    return this.http.get<Usuario[]>(this.urlEndPoint);
  }

  create(usuario:Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.urlEndPoint + '/crear',usuario,{headers: this.httHeaders})

  }

  getUsuario(id):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.urlEndPoint}/${id}`)
  }

  update(usuario:Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.urlEndPoint}/${usuario.id}`, usuario,{headers: this.httHeaders})
  }
  delete(id:number): Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.urlEndPoint}/${id}`,{headers: this.httHeaders})
  }
  recargarCivica(usuario:Usuario, civica:Civica):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.urlEndPoint}/recargarCivica/${usuario.civica.id}`,civica, {headers: this.httHeaders})
  }
}
