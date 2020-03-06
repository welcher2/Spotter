import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderGuestComponent } from './components/headers/header-guest/header-guest.component';
import { MainHeaderComponent } from './components/headers/main-header/main-header.component';
import { HeaderCommunityMemberComponent } from './components/headers/header-community-member/header-community-member.component';
import { HomeComponent } from './components/container/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderGuestComponent,
    MainHeaderComponent,
    HeaderCommunityMemberComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
