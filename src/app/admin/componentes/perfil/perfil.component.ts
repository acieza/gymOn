import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import { SubirService } from 'src/app/core/servicios/subir/subir.service';
import { Usuario } from 'src/app/models/usuario';
import { queSeanIguales } from 'src/app/util/validadorPersonal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  form: FormGroup;

  public usuario:Usuario;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private subirService: SubirService
  ) {
    this.usuario = this.authService.usuario;
    this.buildForm();
    console.log(this.usuario)
   }

  
    private buildForm(){
      this.form = this.formBuilder.group({
        img: [this.usuario.img],
        nombre: [this.usuario.nombre, Validators.required],
        email: [this.usuario.email, [Validators.email,Validators.required]],
        password: ['',[Validators.required,Validators.minLength(5)]],
        vpassword: ['',[Validators.required,Validators.minLength(5)]],
        altura: [''],
        peso: ['']
      },{
        validators: queSeanIguales,
      })
    }

    get cambiaFoto(){
      return this.form.get('img');
      
    }
    
   uploadFile(event){
     const file = event.target.files[0];

     const formData = new FormData();
     formData.append('imagen',file);

     this.subirService.subirFoto(formData)
     .subscribe((resp:any) =>{
      
      console.log(resp.nombreImg);

      this.cambiaFoto.setValue( resp.nombreImg);
      this.usuario.img = resp.nombreImg;
     },(err) =>{
      Swal.fire({
        icon:'error',
        title:'Oops...',
        text: err.error.msg,         
      })     
     });

   }

   modificarUsuario(event: Event){
     event.preventDefault();
     console.log(this.form.value);

    this.authService.modificarUser(this.form.value)
    .subscribe((resp:any) =>{
      
    console.log('*******OK******')
    Swal.fire({
      //position: 'top-end',
      icon: 'success',
      title: 'Usuario Modificado con ??xito',
      showConfirmButton: false,
      timer: 1500
    });
      this.router.navigateByUrl('admin')
     },(err) =>{
      Swal.fire({
        icon:'error',
        title:'Oops...',
        text: err.error.msg,         
      })     
     });

   }
  

}
