import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/container/home/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';


const routes: Routes = [
  {
      path: '',
      redirectTo: 'explore',
      pathMatch: 'full'
  },
  {
      path: 'explore',
      component: HomeComponent
  },
  {
      path: 'auth',
      component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
