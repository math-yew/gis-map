import { Component, Input, OnInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import Map from '@arcgis/core/map';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';

interface City {
  name: string,
  coord: [number, number]
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit, OnChanges {
  @ViewChild('mapViewNode', { static: true }) private mapViewEl!: ElementRef;

  private view!: MapView;

  constructor() { }

  @Input() city: City = { name: 'Pocatello', coord:[-112.4455, 42.8713] };

  ngOnInit(): void {
    // Create a new WebMap instance
    const webmap = new WebMap({
      portalItem: {
        id: 'your-webmap-item-id'
      }
    });

    var map = new Map({
      basemap: "streets-navigation-vector"
    });

    // Create a new MapView instance
    this.view = new MapView({
      container: this.mapViewEl.nativeElement,
      map: map,
      center: this.city.coord,
      zoom: 11
    });
  }



  ngOnChanges(changes: SimpleChanges): void {
    // if (changes.city) {
      const { currentValue } = changes["city"];
      console.log("View");
      // console.log(this.view);
      // console.log(view);
      // console.log(currentValue);
      this.view.center = currentValue.coord;

    // }
  }


}