import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ClasesComponent } from './componentes/clases/clases.component';
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
      }
     ]
  },
  
    ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
