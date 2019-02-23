import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {UserService} from '../services/user/user.service';
declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  constructor(private router: Router,
              private _userService: UserService,
              public _title: Title) {
    this._title.setTitle('Bienvenido a Clinitec');
  }

  ngOnInit() {
    init_plugins();
    this.formulario = new FormGroup({
      username: new FormControl('', Validators.required ),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    const username = this.formulario.get('username').value;
    this._userService.auth(this.formulario.value)
      .subscribe(
        (resp: any) => {
          console.log('Este es el token', resp);
          this._userService.setTokenInStorage(resp);
          this.router.navigate(['/suscripcion']);
        },
        error1 => {
          console.log(error1);
          swal('Error al iniciar sesión', 'Usuario y/o contraseña invalido', 'error');
        }
      );
  }
}
