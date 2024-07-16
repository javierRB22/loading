import { Component } from '@angular/core';

interface LineaNegocio {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  imgSrc: string;
  enlaces: {
    facebook: string;
    instagram: string;
    youtube: string;
    playstore: string;
    pagina: string;
  };
}

@Component({
  selector: 'app-promocionales',
  templateUrl: './promocionales.component.html',
  styleUrls: ['./promocionales.component.css']
})
export class PromocionalesComponent {
  lineas: LineaNegocio[] = [
    {
      titulo: 'PROMOCIONALES',
      subtitulo: 'Línea líder en importación y distribución Promocionales:',
      descripcion: 'Actualmente cuenta con un amplio portafolio de productos para dar respuesta a una necesidad de las empresas colombianas, la promoción y la recordación de sus servicios, productos y marcas a través de artículos promocionales novedosos.',
      imgSrc: 'assets/img/lineas/promocionales.png',
      enlaces: {
        facebook: 'https://www.facebook.com/mppromocionales',
        instagram: 'https://www.instagram.com/marpico.promocionales/?hl=es',
        youtube: 'https://www.youtube.com/channel/UC6k48QE-VbtcR77CGYxgzow',
        playstore: 'https://play.google.com/store/apps/details?id=com.marpicosa.promoapp&hl=es_CO&gl=US',
        pagina: 'https://marpicopromocionales.com/#/'
      }
    }
  ];
}
