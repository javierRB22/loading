import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

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
    appstore: string;
    pagina: string;
  };
}

@Component({
  selector: 'app-ranger',
  templateUrl: './ranger.component.html',
  styleUrl: './ranger.component.css',
})
export class RangerComponent {
  lineas: LineaNegocio[] = [
    {
      titulo: 'FERRETERÍA',
      subtitulo: 'Línea líder en importación y distribución de Ferretería:',
      descripcion:
        'Actualmente cuenta con un amplio portafolio de herramientas mecánicas, manuales y eléctricas distinguidas con el nombre RANGER y MP TOOLS. También incluye elementos de protección industrial en su portafolio, distinguidos con la marca MAVERICK SAFETY. Cubre todo el territorio colombiano, brindando exclusividad y facilidades de entregas.',
      imgSrc: 'assets/img/lineas/ranger.png',
      enlaces: {
        facebook:  'https://www.facebook.com/rangerqualitytools/?locale=es_LA',
        instagram: 'https://www.instagram.com/rangertools/?hl=es-la',
        youtube:   'https://www.youtube.com/@rangertools6342/featured',
        playstore: 'https://play.google.com/store/apps/details?id=com.marpicosa.rangerstore',
        appstore:  'https://apps.apple.com/co/app/ranger-store/id1614911940',
        pagina:    'https://ranger.com.co/#/login',
      },
    },
  ];
}
