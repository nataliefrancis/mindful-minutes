import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';

//connect to Firebase DB based on AngularFire2 v4
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

//connect to components
import { AppComponent } from './app.component';
import { CommunityComponent } from './community/community.component';
import { MapComponent } from './map/map.component';
import { LandingComponent } from './landing/landing.component';
import { GuidedComponent } from './guided/guided.component';
import { HowtoComponent } from './howto/howto.component';

export const firebaseConfig = environment.firebaseConfig;


@NgModule({
  declarations: [
    AppComponent,
    CommunityComponent,
    MapComponent,
    LandingComponent,
    GuidedComponent,
    HowtoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
        apiKey: environment.googleMapsKey,
        libraries: ["places"]
    }),
    AppRoutingModule
  ],                           
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
