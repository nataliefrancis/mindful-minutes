import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

	lat: number;
	lng: number;

	markers: any;


  constructor() { }

  ngOnInit() {
  	this.getUserLocation()
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
