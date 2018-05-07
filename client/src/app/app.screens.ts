/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu';
import { login_PhonePortrait } from '../pages/login/PhonePortrait/login';
import { settings_PhonePortrait } from '../pages/settings/PhonePortrait/settings';
import { categorylistview_PhonePortrait } from '../pages/categorylistview/PhonePortrait/categorylistview';
import { login_PhonePortrait } from '../pages/login/PhonePortrait/login';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    login_PhonePortrait,
    settings_PhonePortrait,
    categorylistview_PhonePortrait,
    login_PhonePortrait
  ];
  static mapping = {
    'login': {
      PhonePortrait: login_PhonePortrait
    },
    'settings': {
      PhonePortrait: settings_PhonePortrait
    },
    'categorylistview': {
      PhonePortrait: categorylistview_PhonePortrait
    },
    'login': {
      PhonePortrait: login_PhonePortrait
    }
  }
}