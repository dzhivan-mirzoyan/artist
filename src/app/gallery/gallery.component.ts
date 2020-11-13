import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  assetsImages = [
    {path:'assets/img/1.jpg', name:'img1', type:"portrait"}, 
    {path:'assets/img/2.jpg', name:'img2', type:"landscape"},
    {path:'assets/img/3.jpg', name:'img3', type:"square"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
