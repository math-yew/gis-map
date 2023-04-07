import { Component, Output, EventEmitter } from '@angular/core';

interface City {
  name: string,
  coord: [number, number]
}

@Component({
  selector: 'app-option-column',
  templateUrl: './option-column.component.html',
  styleUrls: ['./option-column.component.css']
})
export class OptionColumnComponent {
  @Output() valueEmitter = new EventEmitter<City>();

  city: City = { name: 'Pocatello', coord:[-112.4455, 42.8713] };
  // city: City = {name:"",coord[0,0]};

  cities: City[] = [
    { name: 'Pocatello', coord:[-112.4455, 42.8713] },
    { name: 'Boise', coord:[-116.2146, 43.6187] },
    { name: 'Idaho Falls', coord:[-112.0333, 43.4917] }
  ];

  updateCity() {
    this.valueEmitter.emit(this.city);
  }
}
