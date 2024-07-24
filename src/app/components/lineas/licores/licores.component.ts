import { Component } from '@angular/core';

interface LineaNegocio {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  imgSrc: string;
  enlaces: {
    facebook: string;
    instagram: string;
    pagina: string;
  };
}

@Component({
  selector: 'app-licores',
  templateUrl: './licores.component.html',
  styleUrls: ['./licores.component.css']
})
export class LicoresComponent {
  lineas: LineaNegocio[] = [
    {
      titulo: 'VINOS Y LICORES',
      subtitulo: 'Línea líder en importación y distribución de Vinos y licores:',
      descripcion: 'Actualmente es importador y distribuidor exclusivo de vinos y licores de productos provenientes de España, Francia, Italia, Estados Unidos, Argentina, Chile, Australia, Reino Unido, Guatemala y México. Nuestra línea cuenta con Regionales que cubren gran parte del territorio colombiano: Bogotá · Bucaramanga · Medellín · Cali · Barranquilla · Cartagena · Santa Marta · Pereira · Manizales · Armenia',
      imgSrc: 'assets/img/lineas/licores.png',
      enlaces: {
        facebook:  'https://www.facebook.com/marpicovinos',
        instagram: 'https://www.instagram.com/marpicovinosylicores/',
        pagina:    'https://marpicovinos.com/#/VerificacionEdad'
      }
    }
  ];
}
