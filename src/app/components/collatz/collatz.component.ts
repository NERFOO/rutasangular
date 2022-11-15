import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit {
  public desglose! : Array<number>;
  public parametroNumero! : number;

  constructor(private _activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe(( parametros : Params ) => {
      this.parametroNumero = parseInt(parametros["num"]);
      console.log(this.parametroNumero);
      this.desgloseCollatz();
    })
  }

  desgloseCollatz() : void {
    this.desglose = new Array<number>();
    var num = this.parametroNumero;
      this.desglose.push(num);
        while(num != 1){
          if(num % 2 == 0){
            num = num / 2;
          } else{
            num = (num * 3) + 1;
          }
          this.desglose.push(num);
        }
  }

}
