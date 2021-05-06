import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/servicios/auth/auth.service';

@Component({
  selector: 'app-lms',
  templateUrl: './lms.component.html',
  styleUrls: ['./lms.component.css']
})
export class LmsComponent implements OnInit {

  public usuario;

  constructor(
    private authService: AuthService
  ) {
    this.usuario = authService.usuario
    console.log(this.usuario);
   }

  ngOnInit(): void {
  }

  cerrarSesion(){
    this.authService.logout()
  }

}
