import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isOpen = true;

  constructor(private renderer: Renderer2) { }

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
