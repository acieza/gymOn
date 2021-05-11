import { Component, OnInit } from '@angular/core';
import { ClasesService } from 'src/app/core/servicios/clases/clases.service';
import { Clase } from 'src/app/models/clase';

@Component({
  selector: 'app-all-class',
  templateUrl: './all-class.component.html',
  styleUrls: ['./all-class.component.css']
})
export class AllClassComponent implements OnInit {

  clases:Clase[];

  constructor(private clasesService: ClasesService) {
    this.cargaClase()
  }

  ngOnInit(): void {
  }

  cargaClase(){
    this.clasesService.getAllClase()
    .subscribe(clases =>{
      this.clases = clases;
      console.log(this.clases);
    })
  }

   devuelveImagen(imagen: string){
     
    if(imagen=="" || imagen == null){
      return `assets/img/user.png`;
    }else{
       
        return `http://localhost:3000/imgClase/${imagen}`;
    }
}

}
