import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

export class ProductComponent implements OnInit {

  constructor(){}
@Input() product: any;
@Output() productClicked: EventEmitter<any> = new EventEmitter();
date = new Date();

ngOnInit(): void {
  }

addCart(){
  console.log("Añadiendo al carrito");
  this.productClicked.emit(this.product.id);
}

}
