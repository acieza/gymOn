import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { Usuario } from 'src/app/models/usuario';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';
import { Registro } from 'src/app/models/registro';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usuario: Usuario;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(elUser: Login){
    return this.http.post<any>(`http://localhost:3000/login`,elUser)
    .pipe(                                      // Guardar el token en localStorage //
      tap((resp: any) =>{
        const{nombre, email, img, _id, role, altura, peso, clases}=resp.usuarioLogin
        this.usuario=new Usuario(nombre,email,'',img,role,_id,altura,peso, clases);
        this.usuario.imprimirUsuario();
        localStorage.setItem('token', JSON.stringify(resp.token));
      })
      );
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('auth');
  }

  renovarToken(){
    const token = JSON.parse(localStorage.getItem('token') || '');
    return this.http.get('http://localhost:3000/login/renew', {
      headers: {
        'mytoken':token
      }
    })
    .pipe(
      tap((resp: any)=>{
        const{nombre, email, img, _id, role, altura, peso, clases}=resp.usuario
        this.usuario=new Usuario(nombre,email,'',img,role,_id, altura, peso, clases);
        this.usuario.imprimirUsuario();
        localStorage.setItem('token',JSON.stringify(resp.token));
      }),
      map(resp => true),
      catchError(error => of(false))
      ) 
  }

  createUser(newUser:Registro){
    return this.http.post<Registro>('http://localhost:3000/usuarios', newUser);
  }

  modificarUser(putUser: Usuario){
    this.usuario.altura = putUser.altura;
    this.usuario.peso = putUser.peso;
    const token = localStorage.getItem('token') || ''
    return this.http.put<Usuario>(`http://localhost:3000/usuarios/${this.usuario._id}`, putUser, {
      headers: {
        'mytoken':JSON.parse(token)
      }});
  }
  getOnlyUsuarios(){
    const token = localStorage.getItem('token') || ''
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios/user', {
      headers: {
        'mytoken':JSON.parse(token)
      }
    });
  }
  deleteUser(id:string){
    const token = localStorage.getItem('token') || ''
    return this.http.delete<Usuario>(`http://localhost:3000/usuarios/${id}`,{
      headers: {
        'mytoken':JSON.parse(token)
      }
    })
  }
  getOnlyProfesor(){
    const token = localStorage.getItem('token') || ''
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios/profesor', {
      headers: {
        'mytoken':JSON.parse(token)
      }
    });
  }
  modificarUnUser(id: string, putUser: Usuario){
    const token = localStorage.getItem('token') || ''
    return this.http.put<Usuario>(`http://localhost:3000/usuarios/user/${id}`, putUser, {
      headers: {
        'mytoken':JSON.parse(token)
      }});
  }

  getClasePopu(id: string){
    return this.http.get<Usuario>(`http://localhost:3000/usuarios/total/${id}`)
  }

  get role(): 'admin' | 'user' | 'profesor' {
    return this.usuario.role;
  }

  get tokenRol() {
    const helper = new JwtHelperService();

    const eltoken = (localStorage.getItem('token'))

    const decodedtoken = helper.decodeToken(eltoken);
    return decodedtoken;
  }

  addClass(idU: string, idC:string){
 return this.http.get<Usuario>(`http://localhost:3000/usuarios/anadirClaseUser/${idU}/${idC}`);
  }
}
