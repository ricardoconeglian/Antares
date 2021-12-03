import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    MatExpansionModule
  ],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    MatExpansionModule
  ]
})
export class CoreModule { }
