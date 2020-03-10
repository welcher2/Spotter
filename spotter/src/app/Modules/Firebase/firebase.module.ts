import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseApi),
    AngularFireAuthModule
  ],
  exports: [
      CommonModule,
      AngularFireAuthModule,
      AngularFireModule
  ]
})
export class FirebaseModule { }
