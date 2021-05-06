import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Galeria } from 'src/app/models/galeria';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  constructor(private http: HttpClient) { }

  getAllGaleria(){
    return this.http.get<Galeria[]>('http://localhost:3000/galerias');
  }
  createGaleria(newGaleria:Galeria){
    const token = localStorage.getItem('token') || ''
    return this.http.post<Galeria>('http://localhost:3000/galerias', newGaleria,{
      headers: {
        'mytoken':JSON.parse(token)
      }
    })
  }

}
