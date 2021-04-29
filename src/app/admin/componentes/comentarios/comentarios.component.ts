import { Component, OnInit } from '@angular/core';
import { ComentariosService } from 'src/app/core/servicios/comentarios/comentarios.service';
import { Comentario } from 'src/app/models/comentario';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  cartas: Comentario[];

  constructor(private comentariosService: ComentariosService) { }

  ngOnInit(): void {
    this.cargaCarta()
  }

  cargaCarta(){
    this.comentariosService.getAllCarta()
    .subscribe(cartas =>{
      this.cartas = cartas;
    })
  }
}
