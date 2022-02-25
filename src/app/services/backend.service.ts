import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  rutaApi: string = environment.rutaApi

  login(data: any){
    return this.http.post(`${this.rutaApi}/login`, data)
  }
  obtenerRegistrosTienda(data: any){
    return this.http.post(`${this.rutaApi}/obtener/tienda/registros`, {CAC: data})
  }
  obtenerRegistros(){
    return this.http.get(`${this.rutaApi}/obtener/registros`)
  }
  obtenerRegistro(data: any){
    return this.http.post(`${this.rutaApi}/obtener/registro`, {ID_REGISTRO: data})
  }
  modificarRegistro(data: any, texto: any){
    return this.http.post(`${this.rutaApi}/modifiar/registro`, {ID_REGISTRO: data, STATUS_ENTREGA: texto})
  }

  // agregarHistorial(data: any){
  //   return this.http.post(`${this.rutaApi}/`, data)
  // }
  modificarStatus(data: any){
    return this.http.post(`${this.rutaApi}/`, data)
  }

  cargarRegistros(data: any){
    return this.http.post(`${this.rutaApi}/cargar/data`, data)
  }
}
