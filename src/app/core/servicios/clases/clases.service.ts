import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clase } from 'src/app/models/clase';

@Injectable({
  providedIn: 'root'
})
export class ClasesService {

  constructor(private http: HttpClient) { }

  getAllClase(){
    return this.http.get<Clase[]>('http://localhost:3000/clases');
  }

  getClase(id:string){
    const token = localStorage.getItem('token') || ''
    return this.http.get<Clase>(`http://localhost:3000/clases/${id}`,{
      headers: {
        'mytoken':JSON.parse(token)
      }});
  }

  deleteClase(id:string){
    const token = localStorage.getItem('token') || ''
    return this.http.delete<Clase>(`http://localhost:3000/clases/${id}`,{
      headers: {
        'mytoken':JSON.parse(token)
      }
    })
  }

  modificarClase(id: string, putCurso: Clase){
    const token = localStorage.getItem('token') || ''
    return this.http.put<Clase>(`http://localhost:3000/clases/${id}`, putCurso, {
      headers: {
        'mytoken':JSON.parse(token)
      }});
  }

  createClase(newClase:Clase){
    const token = localStorage.getItem('token') || ''
    return this.http.post<Clase>('http://localhost:3000/clases', newClase,{
      headers: {
        'mytoken':JSON.parse(token)
      }
    })
  }
}
