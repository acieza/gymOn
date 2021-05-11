import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import { Clase } from 'src/app/models/clase';

@Component({
  selector: 'app-mis-clases',
  templateUrl: './mis-clases.component.html',
  styleUrls: ['./mis-clases.component.css']
})
export class MisClasesComponent implements OnInit {

  public usuario;

  id = "";
  listado: Clase[]=[]

  constructor
  (private authService: AuthService,) { this.usuario = this.authService.usuario; }

  ngOnInit(): void {
    this.cargaClaseAlum(this.usuario._id)
  }

  cargaClaseAlum(id: string) {
    this.authService.getClasePopu(id).subscribe(
      resp => {
        this.listado = resp.clases;
        console.log(this.listado)
      }, (err) => {
        console.log(err.error.msg);
      }
    )

}
}
