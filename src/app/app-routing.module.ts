import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent   },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({

  imports: [RouterModule.forRoot(routes, { enableViewTransitions: true })],
  exports: [RouterModule],

})

export class AppRoutingModule {}
