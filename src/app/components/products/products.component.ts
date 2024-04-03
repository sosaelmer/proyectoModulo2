import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent implements OnInit{

  constructor() {}

  products = [
    {
      id: '1',
      Image: 'assets/images/img1.png',
      title: 'camisa 1',
      price: '100',
      description: 'Playera color negro talla M     '
    },
    {
      id:  '2',
      Image: 'assets/images/img2.png',
      title: 'Camisa 2',
      price: '100',
      description: 'Camisa manga larga con cuello talla M'
    },
    {
      id:  '3',
      Image: 'assets/images/img3.png',
      title: 'Camisa 3',
      price: '100',
      description: 'Playera en blanco y negro manga corta talla M'
    },{
      id:  '4',
      Image: 'assets/images/img4.png',
      title: 'Camisa 4',
      price: '100',
      description: 'Playera manga corta color azul talla M'
    },{
      id:  '5',
      Image: 'assets/images/img5.png',
      title: 'Camisa 5',
      price: '100',
      description: 'Playera manga corta color morado talla M'
    },{
      id:  '6',
      Image: 'assets/images/img6.png',
      title: 'Camisa 6',
      price: '100',
      description: 'Camisa manga larga con cuello color blanco tala M'
    }
  ]

  ngOnInit(): void {
  }

  clickProduct(id: number){
    console.log("id recibido desde el componente product", id);
  }

}


