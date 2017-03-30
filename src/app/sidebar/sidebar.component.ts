import { Component, OnInit } from '@angular/core';
import { Link } from '../link';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  links: Link[] = [
    {title: "Home", href: "http://vectorvcinco.design"},
    {title: "Store", href: "http://store.vectorvcinco.design"},
    {title: "Facebook", href: "http://facebook.com/vectorvcinco"},
    {title: "Instagram", href: "http://instagram.com/vectorvcinco"}
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
