import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CountriesProvider } from '../../providers/countries/countries';
 
@IonicPage()
@Component({
  selector: 'page-southern-europe',
  templateUrl: 'southern-europe.html',
})
export class SouthernEuropePage {

    countries:any[];
    constructor(public navCtrl: NavController, private cp:CountriesProvider) {
    }
  
    ionViewDidLoad() {
      this.cp.GetCountriesData().subscribe(data =>
      {
        this.countries = data.southerncountries;
      })
    }
  
  }