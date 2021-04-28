import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/servicios/auth/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuarios:Usuario[] = [];

  public usuario:Usuario[] = [];

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.cargaUsers();
  }

  cargaUsers(){
    this.authService.getOnlyUsuarios()
    .subscribe(usuarios =>{
      this.usuarios = usuarios;
      console.log(this.usuarios);
    })
  }
}
