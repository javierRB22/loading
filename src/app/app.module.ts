import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ReactiveModule } from './reactive/reactive.module';
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
      ValoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    ReactiveModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
