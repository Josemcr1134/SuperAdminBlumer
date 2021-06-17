import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PQRCREATEService } from './services/PQRCREATE/pqrcreate.service';
import Swal from 'sweetalert2'
import { PQRform } from './Models/pqr.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   implements OnInit {
  public countryCode: string;
  ngOnInit(): void {
/*     this.activatedRoute.params.subscribe(({id}) => this.getDomiById(id))
 */
  }

  title = 'IndomiPQR';
  public PQRform = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    description: ['', Validators.required,],
    pqr: ['', Validators.required],
    id:[''],
    pqr_detail:[''],
    user:[''],
    userType: [''],
    status: [''],
    created_at: [''],
    completed_at: [''],
   
  }
  
  )

  constructor(private fb : FormBuilder, private pqrService: PQRCREATEService){}
  enviarMensaje():any{
    this.PQRform.controls['username'].setValue(`57${this.PQRform.value['username']}`)
    this.pqrService.createPQR(this.PQRform.value)
            .subscribe( resp => {
              Swal.fire(
                'Enviada con exito!',
                'Espera pronto nuestra respuesta!',
                'success'
              )
            }, (err => {
              Swal.fire(
                 'Error al enviar tu mensaje', 
                 'Numero telefonico no encontrado',
                 'error' 
              )
              console.log(err)
            }))
  }
}
