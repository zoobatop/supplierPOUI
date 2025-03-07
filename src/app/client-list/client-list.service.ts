import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PoTableColumn } from '@po-ui/ng-components';
import { Observable } from 'rxjs';
import { env } from '../../env/env';

@Injectable({
  providedIn: 'root'
})
export class ClientListService {
  private apiREST: string = `${env.api}api/crm/v1/customerVendor/1`

  constructor( private http: HttpClient ) { }

  public getClientList(): Observable<any> {
    return this.http.get(this.apiREST);
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
