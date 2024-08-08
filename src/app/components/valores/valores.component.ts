import { Component } from '@angular/core';

interface Valor {
  imgSrc: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-valores',
  templateUrl: './valores.component.html',
  styleUrls: ['./valores.component.css'],
})
export class ValoresComponent {
  valores: Valor[] = [
    {
      imgSrc: 'assets/img/valores/trabajo-equipo.svg',
      title: 'Trabajo en equipo',
      description:
        'Con el aporte de cada integrante, buscar el logro de los objetivos organizacionales, motivando y fomentando la pasión de todos los miembros del equipo hacia la excelencia. Así mismo impulsar un ambiente que promueva el enriquecimiento mutuo y el respeto por las ideas y opiniones.',
    },
    {
      imgSrc: 'assets/img/valores/innovacion.svg',
      // imgSrc: 'assets/img/valores/grafica.gif',
      title: 'Innovación y competitividad',
      description:
        'Buscar y proponer nuevas maneras de hacer las cosas, y la adquisición de nuevos productos y servicios para satisfacer las necesidades de nuestros clientes.',
    },
    {
      // imgSrc: 'assets/img/valores/LottieLego.gif',
      imgSrc: 'assets/img/valores/enfoque.svg',
      title: 'Enfoque de Servicio',
      description:
        'Buscar dar respuesta a las necesidades de los clientes de forma oportuna, amable y efectiva.',
    },
    {
      imgSrc: 'assets/img/valores/responsabilidad.svg',
      title: 'Responsabilidad',
      description:
        'Llevar a cabo las tareas con cuidado y atención, reflexionando en el impacto de sus decisiones y actividades en la sociedad y el medio ambiente, a través de una conducta ética y transparente, que sea consistente con el desarrollo sostenible y el bienestar de la comunidad.',
    },
    {
      imgSrc: 'assets/img/valores/etica.svg',
      title: 'Transparencia y Ética',
      description:
        'Declaramos nuestro compromiso con un actuar ético, transparente y honesto, acatando las normas, valores de la empresa y haciendo uso adecuado de los recursos.',
    },
    {
      imgSrc: 'assets/img/valores/respeto.svg',
      title: 'Respeto',
      description:
        'Tratar a todas las personas por igual, valorar su trabajo y ayudar en la mejora constante de sus errores. Cuando las personas son respetadas se sienten aceptadas y motivadas por seguir con sus trabajos y desarrollando sus capacidades personales y laborales.',
    },
  ];
}
