import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarSolid: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbarHeight = 80;
    if (window.pageYOffset > navbarHeight) {
      this.navbarSolid = true;
    } else {
      this.navbarSolid = false;
    }
  }

  ngOnInit(): void {
    this.onWindowScroll();
  }
}
