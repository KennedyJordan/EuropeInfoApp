import { Component } from'@angular/core';
import { NavController } from'ionic-angular';
import { WesternEuropePage } from './../western-europe/western-europe';
import { NorthernEuropePage } from './../northern-europe/northern-europe';
import { SouthernEuropePage } from './../southern-europe/southern-europe';
import {EasternEuropePage} from './../eastern-europe/eastern-europe';

@Component({
  selector:'page-home',
  templateUrl:'home.html'
})
  export class HomePage {
  constructor(public navCtrl: NavController) {
  }
  openWesternEurope() {
  this.navCtrl.push(WesternEuropePage);
  }
  openNorthernEurope() {
  this.navCtrl.push(NorthernEuropePage)
  }
  openSouthernEurope() {
  this.navCtrl.push(SouthernEuropePage);
  }
  openEasternEurope(){
  this.navCtrl.push(EasternEuropePage);
  }
}
