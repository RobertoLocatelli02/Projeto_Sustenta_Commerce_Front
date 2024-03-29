import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../model/UserLogin';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://sustentacommerce.herokuapp.com/usuarios/logar', userLogin)
  }

  cadastrar(usuario: Usuario):Observable<Usuario> {
    return this.http.post<Usuario>('https://sustentacommerce.herokuapp.com/usuarios/cadastrar', usuario)
  }

  getByIdUser(id: number):Observable<Usuario>{
    return this.http.get<Usuario>(`https://sustentacommerce.herokuapp.com/usuarios/id/${id}`)

  }

  getBynome(nome: string):Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`https://sustentacommerce.herokuapp.com/usuarios/nome/${nome}`)

  }

  logado() {
    let ok: boolean = false
    if(environment.token != '') {
      ok = true
    }

    return ok
  }

  deslogado() {
    let ok: boolean = true

    if (environment.token != '') {
      ok = false
    }

    return ok
  }

  vendedor() {
    let ok: boolean = true
    if(environment.usuarioVendedor != true) {
      ok = false
    }
    return ok
  }

  administrador() {
    let ok: boolean = false
    if(environment.usuarioVendedor != true) {
      ok = true
    }
    return ok
  }

}
