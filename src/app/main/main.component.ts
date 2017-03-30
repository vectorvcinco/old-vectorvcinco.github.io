import { Component, OnInit } from '@angular/core';
import { CardInterface } from '../card-interface';
import { CardServiceService } from './card-service.service';
import { Observable }        from 'rxjs/Observable';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {

  items: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.items = this.af.database.list('/items');
  }

  ngOnInit() { }

}
