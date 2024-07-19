import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';


import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';


import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HomeComponent } from './pages/home/home.component';
import { InformacionComponent } from './components/informacion-contacto/informacion.component';
import { MisionVisionComponent } from './components/mision-vision/mision-vision.component';
import { NuestrosValoresComponent } from './pages/nuestros-valores/nuestros-valores.component';
import { ValoresComponent } from './components/valores/valores.component';

import { RangerComponent } from './components/lineas/ranger/ranger.component';
import { PromocionalesComponent } from './components/lineas/promocionales/promocionales.component';
import { LicoresComponent } from './components/lineas/licores/licores.component';
import { NuestraHistoriaComponent } from './components/nuestra-historia/nuestra-historia.component';
import { DiccionarioDatosComponent } from './components/diccionario-datos/diccionario-datos.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HomeComponent,
      ContactoComponent,
      NuestrosValoresComponent,
      CarouselComponent,
      MisionVisionComponent,
      InformacionComponent,
      ValoresComponent,
      PromocionalesComponent,
      LicoresComponent,
      RangerComponent,
      PromocionalesComponent,
      LicoresComponent,
      NuestraHistoriaComponent,
      DiccionarioDatosComponent,
      QuienesSomosComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
