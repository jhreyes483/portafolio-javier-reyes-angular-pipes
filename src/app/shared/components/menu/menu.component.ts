import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  public menuItems: MenuItem[] = []

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de angular',
        icon: 'fas fa-code',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'fas fa-calendar',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'fas fa-hashtag',
            routerLink: 'numbers'
          },
          {
            label: 'No comunes',
            icon: 'fas fa-dice',
            routerLink: 'uncommon'
          }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'fas fa-exchange-alt',
        items: [
          {
            label: 'Otro elemento',
            icon: 'pi pi-bog',
            routerLink: 'custom'
          },
        ]
      }
    ]

  }
}
