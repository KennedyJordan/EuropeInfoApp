import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NorthernEuropePage } from './northern-europe';

@NgModule({
  declarations: [
    NorthernEuropePage,
  ],
  imports: [
    IonicPageModule.forChild(NorthernEuropePage),
  ],
})
export class NorthernEuropePageModule {}
