import { Component, EventEmitter } from '@angular/core';

interface City {
  name: string,
  coord: [number, number]
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'arcgis';
  // city: City = {name: "",coord: [0,0]};
  city: City = { name: 'Pocatello', coord:[-112.4455, 42.8713] };

  onCityChange(city: City) {
    this.city = city;
    console.log(city);
  }

}
