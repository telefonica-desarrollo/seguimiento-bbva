import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  constructor(private router: Router, private service: BackendService) {
    this.cac = localStorage.getItem("CAC")
    this.service.obtenerRegistrosTienda(this.cac).subscribe((res)=>{
      this.registros = res;
      this.registrosG = this.registros
    })
   }
  ngOnInit(): void {
  }

  registros: any = []
  registrosG: any = []

  cac: any = ""

  verRegistro(registro: any){
    this.router.navigate(["ejecutivo/registros", registro.ID_REGISTRO])
  }
  busqueda(textoBusqueda: string){
    const text = textoBusqueda.toLowerCase()
    this.registros = this.registrosG.filter((data: any) => data.M_IDENTIFICADOR.toLowerCase().includes(text))
  }


}
