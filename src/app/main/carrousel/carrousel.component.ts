import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  @Input()
  projectinfo: any;

  constructor() { }

  ngOnInit() {
  }

  getPhotos(){
    if (this.projectinfo.photos){
      return Object.keys(this.projectinfo.photos).map(key => this.projectinfo.photos[key]);
    }
    else {
      return "";
    }
  }
}
