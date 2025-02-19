import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../env/enviroment';

@Injectable({
  providedIn: 'root'
})
export class SupplierFormService {

  private apiREST: string = `${env.api}api/crm/v1/customerVendor/`;

  constructor(private http: HttpClient) { }

  public postNewSupplier(body: string) {
    const username:string = 'admin';
    const password:string = '123';
    const encodedCredentials: string = btoa(`${username}:${password}`);

    const headers = new HttpHeaders({
      'Authorization': `Basic ${encodedCredentials}`
    });

    return this.http.post(this.apiREST, body, { headers });
  }

}
