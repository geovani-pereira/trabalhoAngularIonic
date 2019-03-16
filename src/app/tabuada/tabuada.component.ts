import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css']
})
export class TabuadaComponent implements OnInit {

  private n=7;
  private xs=[1,2,3,4,5,6,7,8,9,10];

  constructor() { }

  ngOnInit() {
  }

  tab(valor){
    this.n=valor;
  }

}
