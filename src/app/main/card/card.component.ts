import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input()
  project: any;

  @Output()
  cardClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  carouselEmmiter(event: any){
    this.cardClicked.emit("Me hicieron click!");
  }

}
