import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GaleriaComponent } from '../admin/componentes/galeria/galeria.component';
import { PerfilComponent } from '../lms/componentes/perfil/perfil.component';
import { AllClassComponent } from './componentes/all-class/all-class/all-class.component';
import { ImcComponent } from './componentes/imc/imc.component';
import { MisClasesComponent } from './componentes/mis-clases/mis-clases/mis-clases.component';
import { VideosComponent } from './componentes/videos/videos.component';

import { LmsComponent } from './lms.component';

const routes: Routes = [
  { path: '',
   component: LmsComponent,
   children:[
     {
       path: 'perfil',
       component: PerfilComponent
     },
     {
       path: '',
       component: PerfilComponent
     },
     {
      path: 'imc',
      component: ImcComponent
    },
    {
      path: 'mis-clases',
      component: MisClasesComponent
    },
    {
      path: 'all-class',
      component: AllClassComponent
    },
    {
      path: 'videos/:id',
      component: VideosComponent
    },
     
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LmsRoutingModule { }
