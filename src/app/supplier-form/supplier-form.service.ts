import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../env/env';

@Injectable({
  providedIn: 'root'
})
export class SupplierFormService {

  private apiREST: string = `${env.api}api/crm/v1/customerVendor/`;

  constructor(private http: HttpClient) { }

  public postNewSupplier(body: string) {
    return this.http.post(this.apiREST, body);
  }

}
