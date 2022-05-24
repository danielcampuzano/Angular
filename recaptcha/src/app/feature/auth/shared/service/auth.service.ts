import { Injectable } from "@angular/core";

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";

const SERVICE_RECAPTCHA = environment.baseURL + 'recaptcha'

@Injectable()
export class AuthService {

  constructor(protected http: HttpClient) {}

  validarToken(token: string) {

    const body = {
      token: token
    }

    return this.http.post(`${SERVICE_RECAPTCHA}/validar`, body, { headers: new HttpHeaders({'Authorization': 'Basic ' + 'dXNybW92aWxzdXJhOm1vdmlsc3VyYSo='}) })

  }

}
