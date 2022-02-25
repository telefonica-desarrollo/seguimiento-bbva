import { Component, OnInit } from '@angular/core';
import * as Exceljs from "exceljs"
import { BackendService } from 'src/app/services/backend.service';


@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  RegistrosExcel: any = []
  RegistrosGuardados: number = 0
  RegistrosCambiados: number = 0

  RegistrosBD: any = []


  cargando: boolean = false
  guardando: boolean = false

  constructor(private service: BackendService) {
    this.service.obtenerRegistros().subscribe((res)=>{
      this.RegistrosBD = res
      console.log(this.RegistrosBD);
    })
   }

  ngOnInit(): void {
  }
  
  cargarData(event: any){
    this.cargando = true
  
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsArrayBuffer(file)
    reader.onload = () => {
      const buffer: any = reader.result;
      let woorkbook = new Exceljs.Workbook();
      
      woorkbook.xlsx.load(buffer).then((err)=>{
        var woorksheet = woorkbook.getWorksheet("Hoja1");
        woorksheet.eachRow((row, rowNumber) => {
          if(rowNumber>1){
            let registro: any = {}
            registro.M_IDENTIFICADOR = row.getCell(2).value
            registro.USUARIO = row.getCell(3).value
            registro.CORREO = row.getCell(4).value
            registro.DN = row.getCell(5).value
            registro.MARCA = row.getCell(6).value
            registro.MODELO = row.getCell(7).value
            registro.IMEI = row.getCell(8).value
            registro.FECHA_ACTIVACION = row.getCell(9).value
            registro.CAC = row.getCell(10).value
            registro.GUIA_ENTREGA = row.getCell(11).value
            registro.STATUS_ENTREGA = row.getCell(12).value
            registro.FECHA_LIMITE_ENTREGA = row.getCell(16).value

            this.RegistrosExcel.push(registro)
          }
        })
      }).finally(()=>{
        this.cargando = false
        console.log(this.RegistrosExcel);
      })
    }
  }

  async guardarInfo(){
    this.guardando = true
    let i=0;

    for (let registro of this.RegistrosExcel){
      let existeM = false
      let cambioRegistro = false
      this.RegistrosBD.forEach((dataregistro: any)=>{
        if(dataregistro.M_IDENTIFICADOR == registro.M_IDENTIFICADOR){
          existeM = true
          this.RegistrosGuardados++
          if(dataregistro.STATUS_ENTREGA != registro.STATUS_ENTREGA){
            this.RegistrosCambiados++
            this.service.modificarRegistro(dataregistro.ID_REGISTRO, registro.STATUS_ENTREGA).subscribe((res)=> console.log(res))
          }
        }
      })
      if(!existeM){ //Si no existe el m lo creamos
        const esperar=  new Promise (resolve => setTimeout(resolve, 10))
        await esperar.then(()=> {
          this.service.cargarRegistros(registro).subscribe((res)=> {
            if(res) this.RegistrosGuardados++
          })
        })
      }
    }
  }

}
