import { Component, Input } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private menu: MenuController) { }

  @Input() title: string;

  
  toggleMenu() {
    this.menu.toggle('menu');
  }

}
