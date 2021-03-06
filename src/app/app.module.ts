import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { AppMinimize } from '@ionic-native/app-minimize'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ParadaPage } from '../pages/parada/parada';
import { InfoParadaPage } from '../pages/info-parada/info-parada';
import { ApiRestProvider } from '../providers/api-rest/api-rest';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ParadaPage,
    InfoParadaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ParadaPage,
    InfoParadaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiRestProvider,
    AppMinimize
  ]
})
export class AppModule {}
