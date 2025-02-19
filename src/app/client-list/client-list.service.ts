import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { env } from '../../env/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ClientListService {
  private apiREST: string = `${env.api}api/crm/v1/customerVendor/1`

  constructor( private http: HttpClient ) { }

  public getClientList(): Observable<any> {
    const username:string = 'admin';
    const password:string = '123';
    const encodedCredentials: string = btoa(`${username}:${password}`);

    const headers = new HttpHeaders({
      'Authorization': `Basic ${encodedCredentials}`
    });

    return this.http.get(this.apiREST, { headers });
  }

  public getColumns(): Array<PoTableColumn> {
    return [
      { property: 'code', label: 'Código'},
      { property: 'storeId', label: 'Loja' },
      { property: 'name', label: 'Nome' },
      { property: 'strategicCustomerType', label: 'Fisica/Juridica' },
      { property: 'registerSituation', label: 'Situação' },
    ];
  }
}
