import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {CLIENT_ID, CLIENT_SECRET, DESTINO, GRANT_TYPE, URL_SERVICIOS} from '../../config/config';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';

@Injectable()
export class UserService {
  urlAuth = `${URL_SERVICIOS}/oauth/token`;
  urlLogin = `${URL_SERVICIOS}/login-superusuario`;

  token: string;
  user: any;

  constructor(private router: Router,
              public http: HttpClient) {
    this.loadStorage();
  }

  estaLogueado() {
    return (this.token.length > 5) ? true : false;
  }

  loadStorage () {
    if ( localStorage.getItem('token') ) {
      this.token = localStorage.getItem('token');
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      this.token = '';
      this.user = null;
    }
  }

  auth(user: any) {
    let headers = new HttpHeaders();
    const body = {
      grant_type: GRANT_TYPE,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      Destino: DESTINO,
      username: user.username,
      password: user.password
    };

    const credentials = `grant_type=${GRANT_TYPE}
    &client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&Destino=${DESTINO}
    &username=${user.username}&password=${user.password}`

    headers = headers.append('Content-Type', 'application/json');
    return this.http.post(this.urlAuth, body, {headers})
      .map(
        (resp: any) => {
          console.log(resp);
          this.token = `${resp.token_type} ${resp.access_token}`;
          // this.token = resp.headers.get('authorization');
          return this.token;
        }
      );
  }

  getDataUser(username) {
    const url = `${this.urlLogin}/${username}`;
    let headers: HttpHeaders = new HttpHeaders();
    console.log(this.token);
    // headers = headers.append('Authorization', this.token);
    return this.http.get(url);
  }

  setTokenInStorage(token: string) {
    localStorage.setItem('token', token);
  }

  setInStorage(usuario) {
    console.log(usuario)
    localStorage.setItem('idMedicalCenter', usuario.idCentro_medico);
    localStorage.setItem('user', JSON.stringify(usuario));
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
