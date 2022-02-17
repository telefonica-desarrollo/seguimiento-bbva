import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private service: BackendService) { }

  ngOnInit(): void {
  }

  usuario: any = {
    Usuario: "Ejecutivo",
    Password: "123"
  }

  Login(){
    if(this.usuario.Usuario == "admin" && this.usuario.Password == "123"){
      this.router.navigate(["admin/dashboard"])
    }
    
    Swal.fire({
      allowOutsideClick: false,
      icon: "info",
      text: "Cargando"
    })
    Swal.showLoading();

    this.service.login(this.usuario).subscribe((res: any) => {
      console.log(res);
      if(res) {
        console.log(res);
        localStorage.clear()
        localStorage.setItem("ID_TIENDA", res.ID_TIENDA)

        Swal.close();
        this.router.navigate(["ejecutivo/registros"])
      }else {
        Swal.fire({
          title: "Error al autenticar",
          text: "Usuario o contraseña incorrectos.",
          icon: "error",
          confirmButtonText: "Ok",
        })
      }
    })
  }

}
