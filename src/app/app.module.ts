import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { LayoutModule } from './modules/layout/layout.module';
import { FenetreComponent } from './modules/fenetre/pages/fenetre/fenetre.component';
import { FenetreModule } from './modules/fenetre/fenetre.module';
import { VoletModule } from './modules/volet/volet.module';
import { PortailModule } from './modules/portail/portail.module';
import { PorteModule } from './modules/porte/porte.module';
import { BaieModule } from './modules/baie/baie.module';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    FenetreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HomeModule,
    FenetreModule,
    BaieModule,
    VoletModule,
    PortailModule,
    PorteModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
