import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {

  constructor(){}

  images: string[] = [
    '../../../assets/images/home1.jpg',
    '../../../assets/images/home2.jpg',
    '../../../assets/images/home3.jfif',
    '../../../assets/images/home4.jfif'
  ];

  ngOnInit(): void{

  }
}