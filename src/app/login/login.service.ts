import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { StorageModule } from '../storage/storage.module';
import { Observable } from 'rxjs';
import { env } from '../../env/env';

@Injectable({
  providedIn: 'root'

})
export class LoginService {

  private apiREST: string = `${env.api}api/oauth2/v1/token/`
  private grantType: string = '';

  constructor(private http: HttpClient) { }

  public signIn(login: string, password: string): Observable<any> {
    this.grantType = 'password';
    const params = new HttpParams()
      .append('grant_type', this.grantType)
      .append('username', login)
      .append('password', password);

    return this.http.post(this.apiREST, null, { params });

  }

}
