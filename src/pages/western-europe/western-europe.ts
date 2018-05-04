import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CountriesProvider } from '../../providers/countries/countries';

@IonicPage()
@Component({
  selector: 'page-western-europe',
  templateUrl: 'western-europe.html',
})
export class WesternEuropePage {

    countries:any[];
    constructor(public navCtrl: NavController, private cp:CountriesProvider) {
    }
  
    ionViewDidLoad() {
      this.cp.GetCountriesData().subscribe(data =>
      {
        this.countries = data.westerncountries;
      })
    }
  
  }
