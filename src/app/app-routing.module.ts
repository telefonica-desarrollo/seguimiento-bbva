import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './admin/inicio/inicio.component';
import { CargaComponent } from './admin/carga/carga.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { RegistrosComponentAdmin } from './admin/registros/registros.component';
import { RegistroComponentAdmin } from './admin/registro/registro.component';

import { LoginComponent } from './login/login.component';

import { HomeComponent } from './ejecutivo/home/home.component';
import { RegistrosComponent } from './ejecutivo/registros/registros.component';
import { RegistroComponent } from './ejecutivo/registro/registro.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "admin", component: InicioComponent, children: [
    {path: "dashboard", component: DashboardComponent},
    {path: "carga", component: CargaComponent},
    {path: "registros", component: RegistrosComponentAdmin},
    {path: "registros/:id", component: RegistroComponent},
  ]},
  {path: "ejecutivo", component: HomeComponent, children: [
    {path: "registros", component: RegistrosComponent},
    {path: "registros/:id", component: RegistroComponent}
  ]},
  {path: "**", redirectTo:"login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
