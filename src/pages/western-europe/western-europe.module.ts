import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WesternEuropePage } from './western-europe';

@NgModule({
  declarations: [
    WesternEuropePage,
  ],
  imports: [
    IonicPageModule.forChild(WesternEuropePage),
  ],
})
export class WesternEuropePageModule {}
