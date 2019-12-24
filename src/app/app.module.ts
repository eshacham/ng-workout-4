import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import {
  AmplifyAngularModule,
  AmplifyService,
  AmplifyModules
} from 'aws-amplify-angular';
import Auth from '@aws-amplify/auth';
import Storage from '@aws-amplify/storage';
import { AppRoutingModule } from './app-routing.module';
import { DataEffects } from './store/effects/data.effects';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { appReducers } from './store/reducers/appReducers';
import { IAppState } from './store/state/app.state';
import { DataServiceProvider } from './providers/data-service/data-service';

export const metaReducers: MetaReducer<IAppState>[] = !environment.production
? [storeFreeze]
: [];
@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    StoreModule.forRoot(appReducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      name: 'ng-workouts-4 DevTools',
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([DataEffects]),
    HttpClientModule,
    AmplifyAngularModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: AmplifyService, useFactory: () => {
        return AmplifyModules({
          Auth,
          Storage
        });
      }
    },
    DataServiceProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
