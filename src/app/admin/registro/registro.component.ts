import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponentAdmin implements OnInit {

  constructor(private service: BackendService, private rutaActiva: ActivatedRoute) {
    this.rutaActiva.params.subscribe((data)=>{
      this.service.obtenerRegistro(data.id).subscribe((res) => {
        this.Registro = res
      })
      //   this.Registro.M_ID = "M38794"
      //   this.Registro.USUARIO = "VIRUETA SANTACRUZ MARCO ANTONIO"
      //   this.Registro.CORREO = "ma.virueta qbbva.com"
      //   this.Registro.DN = "5529810429"
      //   this.Registro.MARCA = "SAMSUNG"
      //   this.Registro.MODELO ="GALAXY A52"
      //   this.Registro.IMEI ="4534564351351351456"
      //   this.Registro.FECHA_ACTIVACION = "1/3/2022"
      //   this.Registro.CAC = "CAC 2 PONIENTE CENTRO PUEBLA"
      //   this.Registro.GUIA_ENTREGA = "XXXXMXXXXMXSX21354"
      //   this.Registro.STATUS_ENTREGA = "ENTREGADO"
    })
   }

  ngOnInit(): void {
  }

  Registro: any = {}


}
 