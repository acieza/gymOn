import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import { ClasesService } from 'src/app/core/servicios/clases/clases.service';
import { ComentariosService } from 'src/app/core/servicios/comentarios/comentarios.service';
import { Clase } from 'src/app/models/clase';
import { Comentario } from 'src/app/models/comentario';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuarios:Usuario[] = [];

  public usuario:Usuario[] = [];
  public profesores:Usuario[] = [];

  comentarios: Comentario[]=[];

  clases: Clase[]=[];

  constructor(
    private authService: AuthService,
    private comentariosService: ComentariosService,
    private clasesService: ClasesService,
  ) { }

  ngOnInit(): void {
    this.cargaUsers();
    this.cargaProfesores();
    this.cargaComentarios();
    this.cargaClase();
  }

  cargaUsers(){
    this.authService.getOnlyUsuarios()
    .subscribe(usuarios =>{
      this.usuarios = usuarios;
      console.log(this.usuarios);
    })
  }

  cargaProfesores(){
    this.authService.getOnlyProfesor()
    .subscribe(profesores =>{
      this.profesores = profesores;
      console.log(this.profesores);
    })
  }

  cargaComentarios(){
    this.comentariosService.getAllCarta()
    .subscribe(comentarios =>{
      this.comentarios = comentarios;
      console.log(this.comentarios);
    })
  }

  cargaClase(){
    this.clasesService.getAllClase()
    .subscribe(clases =>{
      this.clases = clases;
      console.log(this.clases);
    })
  }
  
}
