import { Component, OnInit } from '@angular/core';
import { CardInterface } from '../card-interface';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  items: FirebaseListObservable<any>;
  carousel: string = undefined;

  constructor(private af: AngularFireDatabase) {
    this.items = this.af.list('/items');
  }

  ngOnInit() { }

  showCarousel(event: any){
    this.carousel = event;
  }

}
