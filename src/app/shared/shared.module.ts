import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { NavbarTopComponent } from './navbar-top/navbar-top.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    NavbarTopComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule
  ],

  exports: [
    NavbarTopComponent,
    FooterComponent,
    MatIconModule, 
    // MatIconRegistry
  ], 
  providers: [MatIconRegistry]
})
export class SharedModule { }
