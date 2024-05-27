import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NuestrosValoresComponent } from './pages/nuestros-valores/nuestros-valores.component';
import { ContactoComponent } from './pages/contacto/contacto.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'nuestros-valores', component: NuestrosValoresComponent
  },
  {
    path: 'contacto', component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
