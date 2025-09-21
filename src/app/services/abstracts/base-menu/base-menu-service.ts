import { Injectable } from '@angular/core';
import { MenuItem } from '../../../common/models/menu-item';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseMenuService {

  abstract get menuItems(): MenuItem[];

}
