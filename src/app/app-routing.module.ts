import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
// import { NuestrosValoresComponent } from './pages/nuestros-valores/nuestros-valores.component';
// import { DatosMarpicoComponent } from './pages/datos-marpico/datos-marpico.component';
// import { TrabajaConNosotrosComponent } from './pages/trabaja-con-nosotros/trabaja-con-nosotros.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent   },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: HomeComponent },
  // { path: 'nuestros-valores', component: NuestrosValoresComponent },
  // { path: 'trabaja-con-nosotros', component: TrabajaConNosotrosComponent },
  // { path: 'datos-marpico', component: DatosMarpicoComponent },
];

@NgModule({

  imports: [RouterModule.forRoot(routes, { enableViewTransitions: true })],
  exports: [RouterModule],

})

export class AppRoutingModule {}
