import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

	lat: number;
	lng: number;

	markers: any;

	@ViewChild('search') public searchElement: ElementRef;


  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { }

  ngOnInit() {
  	this.getUserLocation()
  	//Sets up the auto complete associated with the google map
  	this.mapsAPILoader.load().then(
  		() => {
  			let autocomplete = new google.maps.places.Autocomplete(this.searchElement.nativeElement, { types:["address"]});

  			autocomplete.addListener("place_changed", () => {
  				this.ngZone.run(() => {
  					let place: google.maps.places.PlaceResult = autocomplete.getPlace();

  					if(place.geometry === undefined || place.geometry === null) {
  						return;
  					}
  				});
  			})
  		}
  	);
  }


  private getUserLocation() {
  	//locate the user
  	if (navigator.geolocation) {
  		navigator.geolocation.getCurrentPosition(position => {
  			this.lat = position.coords.latitude;
  			this.lng = position.coords.longitude;
  		})
  	}
  }

}
