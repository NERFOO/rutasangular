import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menucollatz',
  templateUrl: './menucollatz.component.html',
  styleUrls: ['./menucollatz.component.css']
})
export class MenucollatzComponent implements OnInit {
  public numerosRandom! : Array<number>;

  constructor() { }

  numerosAleat() : void {
    this.numerosRandom = new Array<number>();
    for(var i = 0; i < 5; i++) {
      this.numerosRandom.push(Math.floor(Math.random() * 10 + 1));
    }
  }

  ngOnInit(): void {
    this.numerosAleat();
  }
}
