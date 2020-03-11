import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/container/home/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';


const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      children: [
          {
              path: 'login',
              component: LoginComponent
          }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
