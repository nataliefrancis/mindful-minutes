import { Component, OnInit, NgModule, ViewChild, ElementRef, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MapsAPILoader } from '@agm/core';
// import { } from '@types/googlemaps';
import { GeoService } from '../geo.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

	lat: number;
	lng: number;

	markers: any;

	// @ViewChild('search') public searchElement: ElementRef;
												// private ngZone: NgZone
  constructor(private mapsAPILoader: MapsAPILoader, private geo: GeoService) { }

  ngOnInit() {
  	this.getUserLocation()
  	this.geo.hits.subscribe(hits => this.markers = hits)


  	// this.mapsAPILoader.load().then(
  	// 	() => {
  	// 		let autocomplete = new google.maps.Autocomplete(this.searchElement.nativeElement, { types:["address"] });

  	// 		autocomplete.addListener("place_changed", () => {
  	// 			this.ngZone.run(() => {
  	// 				let place: google.maps.places.PlaceResult = autocomplete.getPlace();

  	// 				if(place.geometry === undefined || place.geometry === null){
  	// 					return;
  	// 				}
  	// 			})
  	// 		})
  	// 	}
  	// );
  }


  private getUserLocation() {
  	//locate the user
  	if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(position => {
  			this.lat = position.coords.latitude;
  			this.lng = position.coords.longitude;

  			this.geo.getLocations(500, [this.lat, this.lng])
  		})
  	}
  }

}
