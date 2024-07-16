import { Component } from '@angular/core';

interface MisionVision {
  titulo: string;
  descripcion: string;
  imgSrc: string;
}

@Component({
  selector: 'app-mision-vision',
  templateUrl: './mision-vision.component.html',
  styleUrls: ['./mision-vision.component.css']
})
export class MisionVisionComponent {
  misionVisionData: MisionVision[] = [
    {
      titulo: 'MISIÓN',
      descripcion: 'Proveer diversos productos que se ajusten a las necesidades de los clientes a través de la importación, distribución y comercialización de productos de Ferretería, Vinos y Licores y Promocionales brindando bienes y servicios innovadores de alta calidad mediante la excelencia en el servicio y competitividad, creando así valor para los clientes, colaboradores y accionistas.',
      imgSrc: 'assets/img/mision-vision/mision1.jpg'
    },
    {
      titulo: 'VISIÓN',
      descripcion: 'Alcanzar un mayor posicionamiento en la comercialización de productos de Ferretería, Vinos y Licores y Promocionales a través de la innovación y calidad de los productos y servicios prestados a sus clientes, siendo una compañía respaldada por su experiencia y conocimiento del mercado, que cuenta con un equipo humano preparado, soportada en procesos, recursos físicos y tecnológicos modernos.',
      imgSrc: 'assets/img/mision-vision/vision1.jpg'
    }
  ];
}
