import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  selectedCountry: String = "--Choose Country--";
  selectedCity: String = "--Choose City--"
  Countries: Array<any> = [
    { name: 'Germany', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
    { name: 'Spain', cities: ['Barcelona', 'Madrid', 'Bilbao'] },
    { name: 'USA', cities: ['Washington', 'New York', 'Los Angeles'] },
    { name: 'Armenia', cities: ['Erevan', 'Gyumri', 'Vanadzor'] },
    { name: 'India', cities: ['Delhi', 'Kolkata', 'Mumbai', 'Bangalore'] },
  ];
  cities: Array<any> = [];
  changeCity(cities: any) {
    this.cities = this.Countries.find((cities: any) => cities.name == this.selectedCountry).cities;
  }

}
