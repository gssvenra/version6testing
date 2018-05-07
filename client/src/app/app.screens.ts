/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu';
import { Login_PhonePortrait } from '../pages/Login/PhonePortrait/Login';
import { settings_PhonePortrait } from '../pages/settings/PhonePortrait/settings';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    Login_PhonePortrait,
    settings_PhonePortrait
  ];
  static mapping = {
    'Login': {
      PhonePortrait: Login_PhonePortrait
    },
    'settings': {
      PhonePortrait: settings_PhonePortrait
    }
  }
}