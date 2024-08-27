import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  //aqui podemos crear variables;
  //NOMBRE: TIPO = valor;
  //NOMBRE: Clase(valor);
  persona = new FormGroup({
    rut: new FormControl('',[Validators.minLength(9),Validators.maxLength(10),Validators.required,Validators.pattern("[0-9]{7,8}-[kK]{1}")]),
    nombre: new FormControl('',[Validators.minLength(3),Validators.required,Validators.pattern("[a-z]{3,5]")]),
    fecha_nacimiento: new FormControl(),
    genero: new FormControl()
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //podemos crear metodos:
  public registrar():void{
    //validadciones? llamar a un posible CRUD
    console.log(this.persona.value);
    alert("Registrado!");
    this.router.navigate(['/login']);
  }
}
