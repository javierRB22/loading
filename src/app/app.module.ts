import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';


import { AppComponent } from './app.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DatosMarpicoComponent } from './pages/datos-marpico/datos-marpico.component';
import { DiccionarioDatosComponent } from './components/diccionario-datos/diccionario-datos.component';
import { HomeComponent } from './pages/home/home.component';
import { InformacionComponent } from './components/informacion-contacto/informacion.component';
import { LicoresComponent } from './components/lineas/licores/licores.component';
import { MisionVisionComponent } from './components/mision-vision/mision-vision.component';
import { NuestraHistoriaComponent } from './components/nuestra-historia/nuestra-historia.component';
import { NuestrosValoresComponent } from './pages/nuestros-valores/nuestros-valores.component';
import { PromocionalesComponent } from './components/lineas/promocionales/promocionales.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { RangerComponent } from './components/lineas/ranger/ranger.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { ValoresComponent } from './components/valores/valores.component';




@NgModule({
  declarations: [
      CarouselComponent,
      ContactoComponent,
      DatosMarpicoComponent,
      DiccionarioDatosComponent,
      InformacionComponent,
      LicoresComponent,
      MisionVisionComponent,
      NuestraHistoriaComponent,
      NuestrosValoresComponent,
      PromocionalesComponent,
      QuienesSomosComponent,
      RangerComponent,
      SobreNosotrosComponent,
      ValoresComponent,
    AppComponent,
    HomeComponent,




  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule,





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
