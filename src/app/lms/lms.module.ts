import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LmsRoutingModule } from './lms-routing.module';
import { LmsComponent } from './lms.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfilComponent } from './componentes/perfil/perfil.component';




@NgModule({
  declarations: [LmsComponent, PerfilComponent],
  imports: [
    CommonModule,
    
    LmsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LmsModule { }
