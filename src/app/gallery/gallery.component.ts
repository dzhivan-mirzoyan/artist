import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  assetsImages = [
    {path:'assets/img/gallery/amor1_por.jpg', name:'Amor', type:"por"},
    {path:'assets/img/gallery/amor2_por.jpg', name:'Amor', type:"por"}, 
    {path:'assets/img/gallery/animal_por.jpg', name:'Animal', type:"por"},
    {path:'assets/img/gallery/armenia_lan.jpg', name:'Armenia', type:"lan"}, 
    {path:'assets/img/gallery/cruz_vida_por.jpg', name:'Cruz de Vida', type:"por"}, 
    {path:'assets/img/gallery/dama_lan.jpg', name:'La dama', type:"lan"}, 
    {path:'assets/img/gallery/dolor_lan.jpg', name:'Dolor', type:"lan"}, 
    {path:'assets/img/gallery/duduk_por.jpg', name:'Duduk', type:"por"}, 
    {path:'assets/img/gallery/elyo_squ.jpg', name:'Autoretrato', type:"squ"}, 
    {path:'assets/img/gallery/esgrimista_por.jpg', name:'La esgrimista', type:"por"}, 
    {path:'assets/img/gallery/firmamento_por.jpg', name:'El firmamento', type:"por"}, 
    {path:'assets/img/gallery/frenesi_por.jpg', name:'El frenesí', type:"por"}, 
    {path:'assets/img/gallery/genocidio_lan.jpg', name:'Genocidio', type:"lan"}, 
    {path:'assets/img/gallery/guerra_por.jpg', name:'La Guerra', type:"por"}, 
    {path:'assets/img/gallery/hermanos_por.jpg', name:'Hermanos', type:"por"}, 
    {path:'assets/img/gallery/jugando_con_las_palomas_por.jpg', name:'Jugando con las palomas', type:"por"}, 
    {path:'assets/img/gallery/mar_lan.jpg', name:'El Mar', type:"lan"}, 
    {path:'assets/img/gallery/mascaras_por.jpg', name:'Mascaras', type:"por"}, 
    {path:'assets/img/gallery/musica_lan.jpg', name:'Música', type:"lan"}, 
    {path:'assets/img/gallery/musica_para_mujer_squ.jpg', name:'Música para mujer', type:"squ"}, 
    {path:'assets/img/gallery/papel_lan.jpg', name:'Papel', type:"lan"}, 
    {path:'assets/img/gallery/por_quien_doblan_las_campanas_por.jpg', name:'Por quien doblan las campanas', type:"por"}, 
    {path:'assets/img/gallery/primadona_por.jpg', name:'Primadona', type:"por"}, 
    {path:'assets/img/gallery/secreto_por.jpg', name:'El secreto', type:"por"}, 
    {path:'assets/img/gallery/sonidos_celestiales_por.jpg', name:'Sonidos celestiales', type:"por"}, 
    {path:'assets/img/gallery/tierra_lan.jpg', name:'La tierra', type:"lan"}, 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
