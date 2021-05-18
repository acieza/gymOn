import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { AnadirClassComponent } from './componentes/anadir-class/anadir-class.component';
import { AnadirEComponent } from './componentes/anadir-e/anadir-e.component';
import { ClasesComponent } from './componentes/clases/clases.component';
import { ComentariosComponent } from './componentes/comentarios/comentarios.component';
import { EditClassComponent } from './componentes/edit-class/edit-class.component';
import { EditUserComponent } from './componentes/edit-user/edit-user.component';
import { GaleriaComponent } from './componentes/galeria/galeria.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { ProfesoresComponent } from './componentes/profesores/profesores.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  { 
    path: '',
     component: AdminComponent,
     children: [
      {
        path: 'perfil',
        component: PerfilComponent
      },
      {
        path: 'usuarios',
        component: UsuariosComponent
      },
      {
        path: 'profesores',
        component: ProfesoresComponent
      },
      {
        path: 'clases',
        component: ClasesComponent
      },
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: '',
        component: InicioComponent
      },
      {
        path: 'EditUser/:id', component: EditUserComponent
      },
      {
        path: 'comentarios',
        component: ComentariosComponent
      },
      {
        path: 'galeria',
        component: GaleriaComponent
       },
       {
        path: 'editClass/:id',
        component: EditClassComponent
       },
       {
        path: 'anadirE/:id',
        component: AnadirEComponent
       },
       {
        path: 'anadirClass',
        component: AnadirClassComponent
       }
     ]
  },
  
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
