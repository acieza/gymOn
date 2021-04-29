import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentario } from 'src/app/models/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private http: HttpClient) { }

  createComent(newComen: Comentario){
    return this.http.post<Comentario>('http://localhost:3000/comentarios', newComen)
  }
  getAllCarta(){
    return this.http.get<Comentario[]>('http://localhost:3000/comentarios');
  }
}
