import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { CommunityComponent } from './community/community.component';
import { MapComponent } from './map/map.component';

export const firebaseConfig = environment.firebaseConfig;


@NgModule({
  declarations: [
    AppComponent,
    CommunityComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
        apiKey: environment.googleMapsKey,
        libraries: ['places']
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
