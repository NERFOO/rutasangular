import { Component, OnInit } from '@angular/core';
//ROUTER PARA LA REDIRECCION POR CODIGO
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css']
})
export class NumerodobleComponent implements OnInit {

  public num! : number;
  public doble! : number;

  //ACTIVATEDROUTER VIENE IYECTADO DESDE EL MODULE, NECESITAMOS DECLARARLO IOC PARA PODER RECUPERAR LOA PARAMETROS
  constructor(private _activeRoute : ActivatedRoute , private _router : Router) { }

  redirect(num : number) : void {
    this._router.navigate(["/numerodoble", num]);
  }

  ngOnInit(): void {
    //NOS SUBSCRIBIMOS Y RECUPERAMOS LOS PARAMETROS, UTILIZAMOS EL OBJETO DE LA INYECCION
    this._activeRoute.params.subscribe(( parametros : Params ) => {
      //DENTRO DE PARAMS PODEMOS RECPERAR CADA PARAMETRO CON SU NAME parametros['PARAMETER NAME']
      if(parametros['num'] != null) {
        //LOS PARAMETROS SIEMPRE SON STRING
        this.num = parseInt(parametros['num']);
        this.doble = this.num * 2;
      }
    });
  }

}
