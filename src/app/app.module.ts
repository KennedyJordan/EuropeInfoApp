import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WesternEuropePage } from '../pages/western-europe/western-europe';
import { NorthernEuropePage } from '../pages/northern-europe/northern-europe';
import { SouthernEuropePage } from '../pages/southern-europe/southern-europe';
import {EasternEuropePage} from '../pages/eastern-europe/eastern-europe';
import { WesternEuropeCountriesPage } from '../pages/western-europe-countries/western-europe-countries';
import { NorthernEuropeCountriesPage } from '../pages/northern-europe-countries/northern-europe-countries';
import { SouthernEuropeCountriesPage } from '../pages/southern-europe-countries/southern-europe-countries';
import {EasternEuropeCountriesPage} from '../pages/eastern-europe-countries/eastern-europe-countries';

@NgModule({
declarations: [
MyApp,
HomePage,
WesternEuropePage,
WesternEuropeCountriesPage,
NorthernEuropePage,
NorthernEuropeCountriesPage,
SouthernEuropePage,
SouthernEuropeCountriesPage,
EasternEuropePage,
EasternEuropeCountriesPage
],
imports: [
BrowserModule,
IonicModule.forRoot(MyApp)
],
bootstrap: [IonicApp],
entryComponents: [
MyApp,
HomePage,
WesternEuropePage,
WesternEuropeCountriesPage,
NorthernEuropePage,
NorthernEuropeCountriesPage,
SouthernEuropePage,
SouthernEuropeCountriesPage,
EasternEuropePage,
EasternEuropeCountriesPage
],
providers: [
StatusBar,
SplashScreen,
{provide: ErrorHandler, useClass: IonicErrorHandler}
]
})
export class AppModule {}
