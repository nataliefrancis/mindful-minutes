import { Component, OnInit } from '@angular/core';

//connect with the database  
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

// lets database know a type of data that will be accessed
interface Event {
  date: string;
  details: string;
}

// extends Event to include the id number
interface EventId extends Event {
  id: string;
}

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
  providers: []
})
export class CommunityComponent implements OnInit {

	public formDate: Date;
	formDetails;
	newEvent;
  eventsCol: AngularFirestoreCollection<Event>; // sets variable to collection type Event
  events: any; //array that comes back from database, used for html ngFor

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {

      //identifies which collection I am accessing in my database
    this.eventsCol = this.afs.collection('events');
    // gets a snapshot of the whole object including id
    this.events = this. eventsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Event;
          const id = a.payload.doc.id;
          return { id, data }; // creates object that includes the data and the id
        })
      });
  }

  // pulls the date value from the form
  public onInput(value: Date): void{
      this.formDate = value;
  }

  //retrives the details of the form
  onSubmit = (formData) => {
  	this.formDetails= formData.details;
  		//creates a new event object with date and details
  	this.newEvent={
  		date: this.formDate,
  		details: this.formDetails
  		}

  		//sends newEvent to database
    this.afs.collection('events').add(this.newEvent)
  }

    //deletes a event from the database
  deleteEvent(eventId) {
    this.afs.doc('events/'+eventId).delete();
  }


}
