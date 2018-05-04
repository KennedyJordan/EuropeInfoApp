import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CountriesProvider } from '../../providers/countries/countries';

@IonicPage()
@Component({
  selector: 'page-eastern-europe-countries',
  templateUrl: 'eastern-europe-countries.html',
})
export class EasternEuropeCountriesPage {
  countries:any[]=[];
  constructor(public navCtrl: NavController, private cp:CountriesProvider) {
  }

  ionViewDidLoad() {
    this.cp.GetCountriesData().subscribe(data =>
    {
      this.countries = data.easterncountries;
    })
  }

}
