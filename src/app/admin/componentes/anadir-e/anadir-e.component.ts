import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClasesService } from 'src/app/core/servicios/clases/clases.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-anadir-e',
  templateUrl: './anadir-e.component.html',
  styleUrls: ['./anadir-e.component.css']
})
export class AnadirEComponent implements OnInit {

  form: FormGroup;
  idClase="";

  constructor(
    private fb: FormBuilder,
    private claseService: ClasesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params)=>{
      this.idClase = params.id;
    })
  }

  buildForm(){
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      link: ['', Validators.required],
      detalle: ['',Validators.required]
    })
  }

  crearEjer(event: Event){
    event.preventDefault();
    console.log(this.form.value);
    this.claseService.createEjercicio(this.form.value, this.idClase)
    .subscribe(newEjer =>{
      console.log('******* Ejercicio Guardado ********');
          Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'Ejercicio Guardado con éxito',
            showConfirmButton: false,
            timer: 1500
          });
            this.router.navigateByUrl('/admin/clases')
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
