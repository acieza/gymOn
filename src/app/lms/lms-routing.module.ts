import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from '../admin/componentes/galeria/galeria.component';
import { PerfilComponent } from '../lms/componentes/perfil/perfil.component';

import { LmsComponent } from './lms.component';

const routes: Routes = [
  { path: '',
   component: LmsComponent,
   children:[
     {
       path: 'perfil',
       component: PerfilComponent
     },
     
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LmsRoutingModule { }
