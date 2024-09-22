import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { TiempoComponent } from './components/tiempo/tiempo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { DatePipe } from '@angular/common';





@NgModule({

  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    TiempoComponent,
    FormularioComponent,
    TiempoComponent,
    CalendarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [
    DatePipe,
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
