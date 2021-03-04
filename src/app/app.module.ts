import { LOCALE_ID, NgModule } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersInterceptor } from './interceptors/headers/headers.interceptor';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    FenetreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    HomeModule,
    FenetreModule,
    BaieModule,
    VoletModule,
    PortailModule,
    PorteModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    { provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
