import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

	public formDate: Date;
	formDetails;
	postings=[];
	newEvent;

  constructor() { }

  ngOnInit() {
  }

  // pulls the date value from the form
  public onInput(value: Date): void{
      this.formDate = value;
  }

  //retrives the details of the form
  onSubmit = (formData) => {
  	this.formDetails=formData;
  		//creates a new event with date and details
  	this.newEvent={
  		date: this.formDate,
  		details: this.formDetails
  		}
  		//pushes those details to the postings array to be displayed in the ngFor in the HTML
  	this.postings.push(this.newEvent);
  }

}
