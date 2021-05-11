import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LmsRoutingModule } from './lms-routing.module';
import { LmsComponent } from './lms.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ImcComponent } from './componentes/imc/imc.component';
import { MisClasesComponent } from './componentes/mis-clases/mis-clases/mis-clases.component';
import { VideosComponent } from './componentes/videos/videos.component';
import { AllClassComponent } from './componentes/all-class/all-class/all-class.component';




@NgModule({
  declarations: [LmsComponent, PerfilComponent, ImcComponent, MisClasesComponent, VideosComponent, AllClassComponent],
  imports: [
    CommonModule,
    
    LmsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LmsModule { }
