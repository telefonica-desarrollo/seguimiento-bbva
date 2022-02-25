import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponentAdmin implements OnInit {

  constructor(private router: Router, private service: BackendService) {
    this.service.obtenerRegistros().subscribe((res)=>{
      this.registros = res;
      this.registrosG = this.registros
    })
   }

  ngOnInit(): void {
  }

  registros: any = []
  registrosG: any = []
  registroBusqueda: string = ""

  verRegistro(registro: any){
    this.router.navigate(["admin/registros", registro.ID_REGISTRO])
  }
  busqueda(textoBusqueda: string){
    const text = textoBusqueda.toLowerCase()
    this.registros = this.registrosG.filter((data: any) => data.M_IDENTIFICADOR.toLowerCase().includes(text))
  }


}
