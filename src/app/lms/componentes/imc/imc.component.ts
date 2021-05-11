import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {

  public usuario:Usuario;

  constructor(
    private authService: AuthService
  ) {
    this.usuario = this.authService.usuario;
    console.log(this.authService.usuario);
   }

  ngOnInit(): void {
  }


  
}
