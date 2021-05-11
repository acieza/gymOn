import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { ClasesService } from 'src/app/core/servicios/clases/clases.service';
import { Ejercicio } from 'src/app/models/ejercicio';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  identificaClase="";

  ejercicios: Ejercicio[];
  link=""
  detalle=""

  constructor
  (
    private activateRouter: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private clasesService: ClasesService
  ) { }

  ngOnInit(): void {
    this.activateRouter.params.subscribe((params: Params)=>{       
      this.identificaClase=params.id
      this.getPopuEjer(this.identificaClase)
      console.log(this.identificaClase)     
    })
  }

  getPopuEjer(id:string){
    this.clasesService.getEjercicioPopu(id)
    .subscribe(clases =>{
      this.ejercicios = clases.ejercicios;
      console.log(this.ejercicios)
    })
  }

  pasaValor(link: string,detalle: string ){
    this.link = link;
    this.detalle = detalle
  }
  video(){
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }

}
