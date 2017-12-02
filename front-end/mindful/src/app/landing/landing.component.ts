import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';

//connect with the database  
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// lets database know a type of data that will be accessed
interface Quote {
  quote: string;
  author: string;
  random: number;
}


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {


	// timer variables
	ticks = 0;
	minutesDisplay: number = 0;
	secondsDisplay: number = 0;
	sub: Subscription;

	//DB variables
	quotesCol: AngularFirestoreCollection<Quote>; // sets variable to collection type Quote
	quotes: any; //array that comes back from database, used for html ngFor

    constructor(private afs: AngularFirestore) { }

      ngOnInit() {

      		//identifies which collection of the DB we are accessing
      		//returns all items in this collection
      	// this.quotes = this.afs.collection('insights').valueChanges();
      	// this.quotesCol = this.afs.collection('insights');
      	// this.quotes=  this.afs.collection('insights', ref => ref.where('random', '==', '5'))


      }

      		//Activates the timer from the click function in the html
		private startTimer() {

		  let timer = Observable.timer(1, 1000);
		  this.sub = timer.subscribe(
		      t => {
		          this.ticks = t;
		          
		          this.secondsDisplay = this.getSeconds(this.ticks);
		          this.minutesDisplay = this.getMinutes(this.ticks);
		      }
		  );
		}

		private getSeconds(ticks: number) {
		  return this.pad(ticks % 60);
		}

		private getMinutes(ticks: number) {
		   return this.pad((Math.floor(ticks / 60)) % 60);
		}

		private pad(digit: any) { 
		  return digit <= 9 ? '0' + digit : digit;
		}


}
