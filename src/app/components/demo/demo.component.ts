import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  constructor(){}

  title = 'lógica, "data binding"';

  items = ['Perez', 'Lopez', 'entrada', 'Gonzales', 'Sanchez']

  ngOnInit(): void{

  }

agregarElemento(){
  this.items.push('Nuevo Elemento');
}

eliminarElemento(i: number){
  this.items.splice(i, 1);
 }

}
