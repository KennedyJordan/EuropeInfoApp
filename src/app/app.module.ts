import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WesternEuropePage } from '../pages/western-europe/western-europe';
import { NorthernEuropePage } from '../pages/northern-europe/northern-europe';
import { SouthernEuropePage } from '../pages/southern-europe/southern-europe';
import { EasternEuropePage} from '../pages/eastern-europe/eastern-europe';
import { CountriesProvider } from '../providers/countries/countries';

@NgModule({
declarations: [
MyApp,
HomePage,
WesternEuropePage,
NorthernEuropePage,
SouthernEuropePage,
EasternEuropePage,
],
imports: [
BrowserModule,
IonicModule.forRoot(MyApp),
HttpClientModule
],
bootstrap: [IonicApp],
entryComponents: [
MyApp,
HomePage,
WesternEuropePage,
NorthernEuropePage,
SouthernEuropePage,
EasternEuropePage,
],
providers: [
StatusBar,
SplashScreen,
{provide: ErrorHandler, useClass: IonicErrorHandler},
    CountriesProvider
]
})
export class AppModule {}
