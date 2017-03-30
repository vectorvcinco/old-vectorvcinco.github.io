import { Component, OnInit } from '@angular/core';
import { CardInterface } from '../card-interface';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  cards: CardInterface[] = [
    { cover: "https://media.giphy.com/media/l3vRlzAvJsfZkSMPS/giphy.gif",
      project: "Proyecto Ejemplo1",
      description: "Descripción",
      productiondate: "Verano 2016",
      client: "Cliente",
      class: {card: true} },
    { cover: "https://media.giphy.com/media/l41lXasUmV7FA9Zks/giphy.gif",
      project: "Proyecto Ejemplo2",
      description: "Descripción",
      productiondate: "Verano 2016",
      client: "Cliente",
      class: {card: true} },
    { cover: "https://media.giphy.com/media/AFam34sEuV8UU/giphy.gif",
      project: "Proyecto Ejemplo3",
      description: "Descripción",
      productiondate: "Verano 2016",
      client: "Cliente",
      class: {card: true} },
    { cover: "https://media.giphy.com/media/xf20D8HzvTQzu/giphy.gif",
      project: "Proyecto Ejemplo4",
      description: "Descripción",
      productiondate: "Verano 2016",
      client: "Cliente",
      class: {card: true} },
    { cover: "https://media.giphy.com/media/l3vRlzAvJsfZkSMPS/giphy.gif",
      project: "Proyecto Ejemplo5",
      description: "Descripción",
      productiondate: "Verano 2016",
      class: {card: true} },
  ]

  constructor() { }

  ngOnInit() {
  }

}
