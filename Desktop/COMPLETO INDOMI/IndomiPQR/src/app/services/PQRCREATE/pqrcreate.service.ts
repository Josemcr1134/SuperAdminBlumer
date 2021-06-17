import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PQRform } from 'src/app/Models/pqr.model';
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PQRCREATEService {

  constructor(private http: HttpClient) { }

  createPQR(formData:PQRform){
    const url = `${base_url}/pqr/`
   return this.http.post(url, formData )
  }
}
// 