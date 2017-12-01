import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

	public myDate: Date;
	details;

  constructor() { }

  ngOnInit() {
  }

  // makes the date input the correct format
  public onInput(value: Date): void{
      this.myDate = value;
  }

  //retrives the details of the form
  onSubmit = (formData) => {
  	this.details=formData;
  }

}
