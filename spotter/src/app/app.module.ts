import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderGuestComponent } from './components/headers/header-guest/header-guest.component';
import { MainHeaderComponent } from './components/headers/main-header/main-header.component';
import { HeaderCommunityMemberComponent } from './components/headers/header-community-member/header-community-member.component';
import { HomeComponent } from './components/container/home/home/home.component';
import { SpotterComponent } from './components/container/home/spotter/spotter.component';
import { SpotterResultsListComponent } from './components/container/home/spotter/spotter-results-list/spotter-results-list.component';
import { SpotterResultsMapComponent } from './components/container/home/spotter/spotter-results-map/spotter-results-map.component';
import { SpotterSearchParamsComponent } from './components/container/home/spotter/spotter-search-params/spotter-search-params.component';
import { ContainerComponent } from './components/container/home/container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderGuestComponent,
    MainHeaderComponent,
    HeaderCommunityMemberComponent,
    HomeComponent,
    SpotterComponent,
    SpotterResultsListComponent,
    SpotterResultsMapComponent,
    SpotterSearchParamsComponent,
    ContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
