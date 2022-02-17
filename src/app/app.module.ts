import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router"
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { InicioComponent } from './admin/inicio/inicio.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CargaComponent } from './admin/carga/carga.component';
import { RegistrosComponentAdmin } from "./admin/registros/registros.component"
import { RegistroComponentAdmin } from "./admin/registro/registro.component"

import { HomeComponent } from './ejecutivo/home/home.component';
import { RegistrosComponent } from './ejecutivo/registros/registros.component';
import { RegistroComponent } from './ejecutivo/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    
    InicioComponent,
    RegistrosComponentAdmin,
    RegistroComponentAdmin,
    DashboardComponent,
    CargaComponent,

    HomeComponent,
    RegistrosComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
