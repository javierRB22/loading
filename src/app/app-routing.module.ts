import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NuestrosValoresComponent } from './pages/nuestros-valores/nuestros-valores.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { DiccionarioDatosComponent } from './components/diccionario-datos/diccionario-datos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nuestros-valores', component: NuestrosValoresComponent },
  { path: 'quienes-somos', component: QuienesSomosComponent   },
  { path: 'contacto', component: ContactoComponent },
  { path: 'datos', component: DiccionarioDatosComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { enableViewTransitions: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
