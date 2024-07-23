import { Component } from '@angular/core';

@Component({
  selector: 'app-diccionario-datos',
  templateUrl: './diccionario-datos.component.html',
  styleUrls: ['./diccionario-datos.component.css']
})
export class DiccionarioDatosComponent {
  rows = [
    { columns: [1, 2, 3] },
    { columns: [1, 2, 3] },
    { columns: [1, 2, 3] }
  ];
}
