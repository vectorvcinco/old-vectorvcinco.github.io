import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  items: FirebaseListObservable<any>;

  constructor(private af: AngularFireDatabase) {
    this.items = this.af.list('/links');
  }

  ngOnInit() {
  }

}
