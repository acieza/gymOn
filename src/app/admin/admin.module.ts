import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
// import {MatMenuModule} from '@angular/material/menu';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { ProfesoresComponent } from './componentes/profesores/profesores.component';
import { ClasesComponent } from './componentes/clases/clases.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { EditUserComponent } from './componentes/edit-user/edit-user.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { CartaComponent } from './componentes/carta/carta.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SliderComponent } from './componentes/galeria/slider/slider.component';

@NgModule({
  declarations: [AdminComponent, PerfilComponent,ClasesComponent,UsuariosComponent, ProfesoresComponent, InicioComponent, EditUserComponent, ComentariosComponent, CartaComponent, GaleriaComponent, SliderComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ]
})
export class AdminModule { }
