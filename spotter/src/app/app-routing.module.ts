import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/container/home/home/home.component';
import { RegisterComponent } from './components/auth/register/register.component';


const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'register',
      component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
