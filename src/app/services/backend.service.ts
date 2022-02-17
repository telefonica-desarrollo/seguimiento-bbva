import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  rutaApi: string = ""

  login(data: any){
    return this.http.post(`${this.rutaApi}/`, data)
  }
  obtenerRegistros(data: any){
    return this.http.post(`${this.rutaApi}/`, data)
  }
  obtenerTodosRegistros(data: any){
    return this.http.post(`${this.rutaApi}/`, data)
  }
  agregarHistorial(data: any){
    return this.http.post(`${this.rutaApi}/`, data)
  }
  modificarStatus(data: any){
    return this.http.post(`${this.rutaApi}/`, data)
  }
  cargarRegistros(data: any){
    return this.http.post(`${this.rutaApi}/`, data)
  }
}
