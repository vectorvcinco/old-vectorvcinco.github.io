import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  items: FirebaseListObservable<any>;

  constructor(private af: AngularFire) {
    this.items = this.af.database.list('/links');
  }

  ngOnInit() {
  }

}
