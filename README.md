# Mindful-Minutes
------
Welcome! In this app, a user can take 15 minutes for themselves and settle their minds all while improving their overall health. On top of being an overall calm place to be, there is access to guided meditations and a community bulletin board for users to post gatherings. Future features will include a user login page in which they can log their weekly meditations, keep a dream journal, and have access to soundscapes including Tibetan bowls and flutes.

[Mindful Minutes](https://mindful-minutes-187623.firebaseapp.com) <--Link to deployed app

![Mindful Minutes](https://github.com/nataliefrancis/mindful-minutes/blob/master/front-end/mindful/src/assets/MindfulMinutes.png)

-----

## Installation instructions
Fork and clone this repo. To run it locally, you'll need the Angular CLI if you don't have it already.

    $ npm install -g @angular/cli
    $ cd mindful_minutes/front-end/mindful
    $ npm install
    $ ng serve --open

You'll need to set up your own database with Firestore. Go to https://cloud.google.com/firestore/ to get your own credentials and place those in your environment.ts file. It should look like this:

    export const environment = {
      production: false, //for deployment, this will need to be changed to true and a copy of this
                         //variable should be placed in environment.prod.ts

      firebaseConfig: {
  	    apiKey: "",
  	    authDomain: "",
  	    databaseURL: "",
  	    projectId: "",
  	    storageBucket: "",
  	    messagingSenderId: ""
    },

     googleMapsKey: ''
    };

You should also get your own google map API key if you would like to mess around with that part as well. You can find that info here https://developers.google.com/maps/.

------

## Technologies used

This app was created using Angular5, Firestore (presently in beta), and deployed using Firebase Hosting. The Google map was inserted using Angular Google Maps (AGM).

------

## Approach taken

My last two projects I went heavy on the backend, so when I started this project I knew I wanted an easy database setup to allow me to focus on the front end. This is why I chose Firebase, which ultimately led me to Firestore. I switched to Firestore because I better liked the way the data was structured when it came to the autoIds.
To start, my major aspects were Angular (I defaulted to Angular5 and it ended up working out), Firebase, Spotify API, and Google Maps API. As I mentioned, I didn't really care for how Firebase setup their ID numbers, so I tried out Firestore which is in beta. I really liked it, it was exactly what I needed since my database needs at present are quite light. 
Spotify gave me some hassle. I had tested Spotify with Angular before even starting this project, just to iron out any bugs. Yet when I got started on the official project, I ran into a lot of issues, some of which I still am puzzled about. Some links worked, others didn't. The info I needed wasn't exclusive to Spotify thank goodness, so I switched over to YouTube which was rather seamless.

You can refer to my [Trello](https://trello.com/b/HJyykzJB/mindful-minutes) for User Stories and future features.

------

## Wireframes
![Wireframes 1](https://github.com/nataliefrancis/mindful-minutes/blob/master/front-end/mindful/src/assets/wireframe1.png)
![Wireframes 2](https://github.com/nataliefrancis/mindful-minutes/blob/master/front-end/mindful/src/assets/wireframe2.png)
-----
