import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ComentariosService } from 'src/app/core/servicios/comentarios/comentarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private comentarioService: ComentariosService
  ) { 
    this.builForm();
  }

  private builForm(){
    this.form = this.formBuilder.group({
      email:['', Validators.required],
      contenido:['', [Validators.required]]
    })
  }

  crearComentario(event: Event){
    event.preventDefault();
    console.log(this.form.value);
    this.comentarioService.createComent(this.form.value)
    .subscribe(newComen =>{
      console.log('******* Comentario Guardado ********');
          Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'Enviado con éxito',
            showConfirmButton: false,
            timer: 1500
          });
            //this.router.navigateByUrl('auth')
    },(err)=>{console.log(err.error.msg)         
      Swal.fire({
        icon:'error',
        title:'Oops...',
        text: err.error.msg,         
      })     
    }
    );
  }
}
