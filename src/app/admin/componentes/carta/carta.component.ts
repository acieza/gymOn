import { Component, Input, OnInit } from '@angular/core';
import { Comentario } from 'src/app/models/comentario';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  @Input() datosCarta: Comentario;

  constructor() { }

  ngOnInit(): void {
  }

}
