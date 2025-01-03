import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RippleModule } from 'primeng/ripple';
import { SharedModule } from "./shared/shared.module";

//configuración LOCALE de la app
import localeEsPY from '@angular/common/locales/es-PY';
import localeFrCA from '@angular/common/locales/fr-CA';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsPY);
registerLocaleData(localeFrCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RippleModule,
    SharedModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-PY' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
