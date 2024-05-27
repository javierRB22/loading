import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';

import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NuestrosValoresComponent } from './pages/nuestros-valores/nuestros-valores.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { MisionVisionComponent } from './components/mision-vision/mision-vision.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { ValoresComponent } from './components/valores/valores.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardsComponent,

    HomeComponent,
      ContactoComponent,
      NuestrosValoresComponent,
      CarouselComponent,
      MisionVisionComponent,
      InformacionComponent,
      ValoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
