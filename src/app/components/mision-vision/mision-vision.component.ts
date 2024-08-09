import { Component } from '@angular/core';

interface MisionVision {
  titulo: string;
  descripcion: string;
  imgSrc: string;
}

@Component({
  selector: 'app-mision-vision',
  templateUrl: './mision-vision.component.html',
  styleUrls: ['./mision-vision.component.css'],
})
export class MisionVisionComponent {
  misionVisionData: MisionVision[] = [
    {
      titulo: 'MISIÓN',
      descripcion:
        'Proveer una amplica gama de productos que satisfagan las necesidades de nuestros clientes a través de la importación, distribución y comercialización de productos de Ferretería, Promocionales y Vinos y Licores. Apoyando su modelo de negocio, aumentando su rentabilidad económica y su impacto positivo en las comunidades',
      imgSrc: 'assets/img/mision-vision/mision1.jpg',
    },
    {
      titulo: 'VISIÓN',
      descripcion:
        'Alcanzar un mayor posicionamiento en el mercado latinoamericano mediante la comercialización de productos de diversas industrias, a través de la innovación y la calidad de nuestros productos y servicios.Introduciremos nuevas ofertas que respondan a las necesidades cambiantes del mercado, con el objetivo de perdurar en el tiempo.Nuestra estrategia se basa en la experiencia, el conocimiento del sector y un equipo humano altamente capacitado.Nos comprometemos a operar de manera sostenible, apoyando el bienestar de nuestras comunidades y respetando el medio ambiente.Utilizaremos procesos eficientes y recursos fisicos y tecnológicos modernos para mantener nuestra relevancia y ofrecer un valor excepcional a nuestros clientes y a la región.',
      imgSrc: 'assets/img/mision-vision/vision1.jpg',
    },
  ];
}
