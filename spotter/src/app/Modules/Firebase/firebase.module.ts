import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database/database.module';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebaseApi),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  exports: [
      CommonModule,
      AngularFireAuthModule,
      AngularFireModule,
      AngularFireDatabaseModule
  ]
})
export class FirebaseModule { }
