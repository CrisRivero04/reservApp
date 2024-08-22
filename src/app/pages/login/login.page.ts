import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //aqui podemos crear variables, constantes, listas, arreglos, json, etc;
  //nombre_variable: TIPO_DATO = VALOR;
  titulo: string = "PAGINA DE LOGIN";
  numero: number = 5;
  decimal: number = 5.2;
  existe: boolean = true;
  fecha_hoy: Date = new Date();
  nombres: string[] = ["Pedro","Juan","Diego"];
  persona: any = {"nombre":"Jeison","edad":5};

  //NgModel
  email: string = "";
  constructor() { }

  ngOnInit() {
  }

}
