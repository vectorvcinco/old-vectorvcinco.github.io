import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'carousel-content',
  templateUrl: './carousel.Component.html'
})
export class NgbdModalContent {
  @Input() projectinfo;

  constructor(public activeModal: NgbActiveModal) {}

  getPhotos(){
    if (this.projectinfo.photos){
      return Object.keys(this.projectinfo.photos).map(key => this.projectinfo.photos[key]);
    }
    else {
      return "";
    }
  }
}

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @Input() project: any;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  open(project: any) {
    if (this.project.photos) {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.projectinfo = project;
    }
  }
}
