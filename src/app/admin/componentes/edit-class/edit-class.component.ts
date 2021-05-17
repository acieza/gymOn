import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ClasesService } from 'src/app/core/servicios/clases/clases.service';
import { SubirService } from 'src/app/core/servicios/subir/subir.service';
import { Clase } from 'src/app/models/clase';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {
  form: FormGroup;
  identificaClase="";
  clases:Clase;


    

  constructor(
    private formBuilder: FormBuilder,
    private activateRouter: ActivatedRoute,
    private clasesService: ClasesService,
    private subirService: SubirService,
    private router: Router
    ) { 
      this.buildForm();  
    }

ngOnInit(){
  this.activateRouter.params.subscribe((params: Params)=>{       
    this.identificaClase=params.id
    this.clasesService.getClase(this.identificaClase)
    .subscribe(clase =>{
      this.form.patchValue(clase);
    })
});
}
    private buildForm(){
      this.form = this.formBuilder.group({
        imagen: [''],
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required],
        diaS: ['', Validators.required],
        hora: ['', Validators.required],
      })
    }

    get cambiaFoto(){
      return this.form.get('imagen');
      
    }
    
    uploadFile(event){
      const file = event.target.files[0];
  
      const formData = new FormData();
      formData.append('imagen',file);
  
      this.subirService.subirFotoC(formData)
      .subscribe((resp:any) =>{
       
       console.log(resp.nombreImg);
  
       this.cambiaFoto.setValue( resp.nombreImg);
      },(err) =>{
       Swal.fire({
         icon:'error',
         title:'Oops...',
         text: err.error.msg,         
       })     
      });
  
    }
  
  
    
   modificaClase(event: Event){
    event.preventDefault();
    console.log(this.form.value);
    console.log(this.identificaClase);
    this.clasesService.modificarClases(this.identificaClase, this.form.value)
   .subscribe((resp:any) =>{
     
     console.log('*******Clase Editada con Exito******')
     Swal.fire({
       //position: 'top-end',
       icon: 'success',
       title: 'Clase Editada con éxito',
       showConfirmButton: false,
       timer: 1500
     });
     this.router.navigateByUrl(`/admin/clases`)

   }, (err) => {
    Swal.fire({
      icon:'error',
      title:'Oops...',
      text: err.error.msg,         
    })     
   });


  }

}
