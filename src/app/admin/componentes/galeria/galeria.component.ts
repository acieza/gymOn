import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SliderService } from 'src/app/core/servicios/slider/slider.service';
import { SubirService } from 'src/app/core/servicios/subir/subir.service';
import { Galeria } from 'src/app/models/galeria';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  form: FormGroup;

  galerias:Galeria[]=[];


  constructor(
    private subirService: SubirService,
    private sliderService: SliderService,
    private router: Router,
    private galeriaService: SliderService,
    private formBuilder: FormBuilder) 
    {this.builForm() }

    private builForm(){
      this.form = this.formBuilder.group({
        imagen:['',Validators.required],
        titulo:['', Validators.required],
        descripcion:['',Validators.required],
      })
      
    }

  ngOnInit(): void {
  }

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

  crearGaleria(event: Event){
    event.preventDefault();
    console.log(this.form.value);
    this.sliderService.createGaleria(this.form.value)
    .subscribe(newGaleria =>{
      console.log('******* Foto Guardada ********');
          Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'Foto Guardada con éxito',
            showConfirmButton: false,
            timer: 1500
          });
            this.router.navigateByUrl(`admin/galeria`)
    },(err)=>{         
      Swal.fire({
        icon:'error',
        title:'Oops...',
        text: err.error.msg,         
      })     
    }
    );
  }

  get cambiaFoto(){
    return this.form.get('imagen');
    
  }
  
  uploadFile(event){
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('imagen',file);

    this.subirService.subirFotoG(formData)
    .subscribe((resp:any) =>{
     
     console.log(resp.nombreImg);

     this.cambiaFoto.setValue( resp.nombreImg);
    
     //this.curso.imagen = resp.nombreImg;
    // this.curso.imagen2 = resp.nombreImg;
    },(err) =>{
     Swal.fire({
       icon:'error',
       title:'Oops...',
       text: err.error.msg,         
     })     
    });

  }


}
