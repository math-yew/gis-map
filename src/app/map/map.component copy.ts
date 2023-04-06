import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('mapViewNode', { static: true }) private mapViewEl: ElementRef;

  ngOnInit() {
    const map = new WebMap({
      basemap: 'streets-navigation-vector'
    });

    const mapView = new MapView({
      container: this.mapViewEl.nativeElement,
      map: map
    });
  }
}