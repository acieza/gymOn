import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'
import { SliderService } from 'src/app/core/servicios/slider/slider.service';
import { Galeria } from 'src/app/models/galeria';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {

  galerias:Galeria[]=[];

  constructor( private _confing:NgbCarouselConfig,
    private galeriaService: SliderService
    ) {this.cargaGaleria() }

  

  cargaGaleria(){
    this.galeriaService.getAllGaleria()
    .subscribe(galerias =>{
      this.galerias = galerias;
      console.log(this.galerias);
      // this.filteredItems = this.clases;
      // this.init();
    })
  }

  devuelveImagen(imagen: string){
       
    if(imagen=="" || imagen == null){
      return `assets/img/user.png`;
    }else{
       
        return `http://localhost:3000/imgGaleria/${imagen}`;
    }
}

}
