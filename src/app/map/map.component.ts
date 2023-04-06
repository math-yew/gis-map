import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Map from '@arcgis/core/map';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  @ViewChild('mapViewNode', { static: true }) private mapViewEl!: ElementRef;

  constructor() { }

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
    const mapView = new MapView({
      container: this.mapViewEl.nativeElement,
      map: map,
      center: [-112.443, 42.871],
      zoom: 12
    });
  }
}
