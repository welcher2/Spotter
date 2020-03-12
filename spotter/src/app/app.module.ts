import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './Modules/shared.module';
import { FirebaseModule } from './Modules/Firebase/firebase.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/container/home/home/home.component';
import { SpotterComponent } from './components/container/home/spotter/spotter.component';
import { ContainerComponent } from './components/container/home/container/container.component';
import { SpotterApplicationComponent } from './components/container/home/spotter/spotter-application/spotter-application/spotter-application.component';
import { SpotterMapComponent } from './components/container/home/spotter/spotter-application/spotter-map/spotter-map.component';
import { SpotterListComponent } from './components/container/home/spotter/spotter-application/spotter-search/spotter-list/spotter-list.component';
import { SpotterSearchComponent } from './components/container/home/spotter/spotter-application/spotter-search/spotter-search.component';
import { LoginComponent } from './components/auth/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { MaskDirective } from './Shared/mask/mask.directive';
import { DobDirective } from './Shared/mask/dob.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SpotterComponent,
    ContainerComponent,
    SpotterApplicationComponent,
    SpotterMapComponent,
    SpotterSearchComponent,
    SpotterListComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    MaskDirective,
    DobDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FirebaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
