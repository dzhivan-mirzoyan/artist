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
    {path:'assets/img/gallery/adam_eva_por.jpg', name:'Adam y Eva', type:"por"},
    {path:'assets/img/gallery/amor_por.jpg', name:'El amor', type:"por"}, 
    {path:'assets/img/gallery/familia_por.jpg', name:'La familia', type:"por"}, 
    {path:'assets/img/gallery/granada_lan.jpg', name:'La granada', type:"lan"}, 
    {path:'assets/img/gallery/hijo_por.jpg', name:'Hijo', type:"por"}, 
    {path:'assets/img/gallery/huellas_guerra_por.jpg', name:'Las huellas de la guerra', type:"por"}, 
    {path:'assets/img/gallery/lazarov_front_por.jpg', name:'Lazarov', type:"por"}, 
    {path:'assets/img/gallery/lazarov_por.jpg', name:'Lazarov', type:"por"}, 
    {path:'assets/img/gallery/lazarov_s_por.jpg', name:'Lazarov', type:"por"}, 
    {path:'assets/img/gallery/santo_padre_por.jpg', name:'El santo padre', type:"por"}, 
    {path:'assets/img/gallery/santo_padre_back_por.jpg', name:'El santo padre', type:"por"}, 
    {path:'assets/img/gallery/sonata_por.jpg', name:'La sonata', type:"por"}, 
    {path:'assets/img/gallery/toro_por.jpg', name:'El toro', type:"por"},
    {path:'assets/img/gallery/bailarina_por.jpg', name:'La bailarina', type:"por"},
    {path:'assets/img/gallery/baile_lan.jpg', name:'El baile', type:"lan"},
    {path:'assets/img/gallery/banquete_por.jpg', name:'El banquete', type:"por"},
    {path:'assets/img/gallery/canaval_lan.jpg', name:'Carnaval', type:"lan"},
    {path:'assets/img/gallery/komitas_por.jpg', name:'Komitas', type:"por"},
    {path:'assets/img/gallery/orquesta_por.jpg', name:'La orquesta', type:"por"},
    {path:'assets/img/gallery/padre_por.jpg', name:'Padre', type:"por"},
    {path:'assets/img/gallery/paloma_lan.jpg', name:'La paloma', type:"lan"},
    {path:'assets/img/gallery/pececito_por.jpg', name:'Mi pececito', type:"por"},
    {path:'assets/img/gallery/pegaso_por.jpg', name:'Pegaso', type:"por"},
    {path:'assets/img/gallery/sangre_por.jpg', name:'Sangre', type:"por"},
    {path:'assets/img/gallery/senyorita_por.jpg', name:'Señorita', type:"por"},
    {path:'assets/img/gallery/sorpresa_por.jpg', name:'Sorpresa', type:"por"},
    {path:'assets/img/gallery/te_lan.jpg', name:'El té', type:"lan"},
    {path:'assets/img/gallery/vestido_blanco.jpg', name:'Vestido blanco', type:"por"}, 
    {path:'assets/img/gallery/escuela_lan.jpg', name:'Clase', type:"lan"} 
  ];

  constructor() { }

  ngOnInit(): void {
  }

  topFunction() {
    window.scroll(0,0);
  }

}
