import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CountriesProvider } from '../../providers/countries/countries';
 
@IonicPage()
@Component({
  selector: 'page-northern-europe',
  templateUrl: 'northern-europe.html',
})
export class NorthernEuropePage {

  countries:any[];
  constructor(public navCtrl: NavController, private cp:CountriesProvider) {
  }

  ionViewDidLoad() {
    this.cp.GetCountriesData().subscribe(data =>
    {
      this.countries = data.northerncountries;
    })
  }

}
