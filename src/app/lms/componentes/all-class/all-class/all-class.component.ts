import { Component} from '@angular/core';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import { ClasesService } from 'src/app/core/servicios/clases/clases.service';
import { Clase } from 'src/app/models/clase';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-class',
  templateUrl: './all-class.component.html',
  styleUrls: ['./all-class.component.css']
})
export class AllClassComponent {

  public usuario;

  clases:Clase[];

  constructor(
    private clasesService: ClasesService,
    private authService: AuthService
    ) {
    this.cargaClase();
    this.usuario = authService.usuario;
    console.log(this.usuario._id)
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

AddClase(idC:string, nombre:string){

  this.authService.addClass(this.usuario._id,idC)
        .subscribe( resp =>{
          // this.cargaUsers()
          console.log('*****Clase Añadida*****')
          Swal.fire({
            //position: 'top-end',
            icon: 'success',
            title: 'Clase Añadida con éxito',
            showConfirmButton: true,
            timer: 1500
          });
          // this.router.navigateByUrl(`/admin/Usuarios`)
     
        }, (err) => {
         Swal.fire({
           icon:'error',
           title:'Ya estás apuntado a '+ nombre,
           text: err.error.msg,         
         })     
        });
}

}
