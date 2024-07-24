import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';





@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,






  ],

  exports: [
    NavbarComponent,
    FooterComponent,
    DropdownModule

  ]
})
export class SharedModule { }
