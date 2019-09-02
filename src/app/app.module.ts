import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { StoreModule, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { WorkoutsEffects } from './store/effects/data.effects';
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
    EffectsModule.forRoot([WorkoutsEffects]),
    !environment.production ?
      StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DataServiceProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
