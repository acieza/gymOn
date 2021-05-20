import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import { ClasesService } from 'src/app/core/servicios/clases/clases.service';
import { ComentariosService } from 'src/app/core/servicios/comentarios/comentarios.service';
import { SliderService } from 'src/app/core/servicios/slider/slider.service';
import { Clase } from 'src/app/models/clase';
import { Comentario } from 'src/app/models/comentario';
import { Ejercicio } from 'src/app/models/ejercicio';
import { Galeria } from 'src/app/models/galeria';
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
  galerias: Galeria[]=[];
  ejercicios: Ejercicio[]=[];

  constructor(
    private authService: AuthService,
    private comentariosService: ComentariosService,
    private clasesService: ClasesService,
    private sliderService: SliderService,
  ) { }

  ngOnInit(): void {
    this.cargaUsers();
    this.cargaProfesores();
    this.cargaComentarios();
    this.cargaClase();
    this.cargaGaleria();
    this.cargaEjer();
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
  cargaGaleria(){
    this.sliderService.getAllGaleria()
    .subscribe(galerias =>{
      this.galerias = galerias;
      console.log(this.galerias);
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
  cargaEjer(){
    this.clasesService.getAllEjercicios()
    .subscribe(ejercicios =>{
      this.ejercicios = ejercicios;
      console.log(this.ejercicios)
    })
  }
  
}
