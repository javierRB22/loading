import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.component.html',
  styleUrl: './sobre-nosotros.component.css'
})
export class SobreNosotrosComponent implements OnInit {
  ngOnInit(): void {
    window.scroll(0, 0)
  }

}
