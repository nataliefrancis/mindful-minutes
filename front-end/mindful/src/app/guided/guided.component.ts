import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-guided',
  templateUrl: './guided.component.html',
  styleUrls: ['./guided.component.css']
})
export class GuidedComponent implements OnInit {

	url1: SafeUrl;
//
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {

  	// this.url = "https://open.spotify.com/album/4d3zxdW5JOGBGaiOU5Bpcx";
  	// this.url1 = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  safeUrl(url1) {
    this.url1 = this.sanitizer.bypassSecurityTrustResourceUrl(url1);
  }



}
