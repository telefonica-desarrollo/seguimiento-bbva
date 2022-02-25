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
    USUARIO: "",
    PASSWORD: ""
  }

  Login(){
    if(this.usuario.USUARIO == "Admin_General" && this.usuario.PASSWORD == "Movistar123"){
      this.router.navigate(["admin/dashboard"])
      return
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
        localStorage.setItem("CAC", res.CAC)

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
