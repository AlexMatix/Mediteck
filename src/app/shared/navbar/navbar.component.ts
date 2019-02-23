import {Component, OnInit, Renderer2} from '@angular/core';
import {UserService} from '../../services/user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isOpen = true;

  constructor(private renderer: Renderer2,
              public _userService: UserService) { }

  ngOnInit() {
  }

  cerrarMenu() {
    if (this.isOpen) {
      this.renderer.addClass(document.body, 'ls-toggle-menu');
      this.isOpen = false;
    } else {
      this.renderer.removeClass(document.body, 'ls-toggle-menu');
      this.isOpen = true;
    }
  }
}
