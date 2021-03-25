import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './guard/admin.guard';
import { AuthGuard } from './guard/auth.guard';
import { LocalComponent } from './pages/local/local.component';

const routes: Routes = 
[
  {
    path: '', component: LocalComponent
  },
  { 
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  { 
    path: 'admin',
    canActivate: [AuthGuard, AdminGuard],loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
{
   path: 'lms',
   canActivate: [AuthGuard], loadChildren: () => import('./lms/lms.module').then(m => m.LmsModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
