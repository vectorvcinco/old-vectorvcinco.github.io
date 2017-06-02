import { Input, SimpleChanges, Component, OnInit } from '@angular/core';

@Component({
  selector: 'carousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  @Input()
  projectinfo: any;
  @Input()
  show: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);

      if (propName === "show" && cur){
        this.showCarousel()
      }
      }
  }

  showCarousel(){
    console.log("Showing Carousel");
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
