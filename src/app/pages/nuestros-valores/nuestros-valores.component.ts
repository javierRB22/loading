import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuestros-valores',
  templateUrl: './nuestros-valores.component.html',
  styleUrl: './nuestros-valores.component.css'
})
export class NuestrosValoresComponent implements OnInit {
  ngOnInit(): void {
    window.scroll(0, 0)
  }

}
