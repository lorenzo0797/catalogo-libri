import { Injectable } from '@angular/core';
import { MenuItem } from '../../common/models/menu-item';
import { BaseMenuService } from '../abstracts/base-menu/base-menu-service';
import { Icons } from '../../common/enums/icons-enum';

@Injectable()
export class MenuService extends BaseMenuService {

  override get menuItems(): MenuItem[] {
    return this.items;
  }

  private items: MenuItem[] = [
    {
      title: 'Home',
      icon: Icons.HOME,
      link: 'home'
    },
    {
      title: 'Lista libri',
      icon: Icons.LIBRARY,
      link: 'libri/lista'
    }
  ]

  constructor() {
    super();
  }

}
