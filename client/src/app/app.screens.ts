/***  Generated file, do not change.  */
import { Page } from 'ionic-angular/navigation/nav-util';
import { MenuComponent } from './menu/menu';
import { Login_PhonePortrait } from '../pages/Login/PhonePortrait/Login';
import { Home_PhonePortrait } from '../pages/Home/PhonePortrait/Home';
import { settings_PhonePortrait } from '../pages/settings/PhonePortrait/settings';
export class Screens {
  static declarations: Page[] = [
    MenuComponent,
    Login_PhonePortrait,
    Home_PhonePortrait,
    settings_PhonePortrait
  ];
  static mapping = {
    'Login': {
      PhonePortrait: Login_PhonePortrait
    },
    'Home': {
      PhonePortrait: Home_PhonePortrait
    },
    'settings': {
      PhonePortrait: settings_PhonePortrait
    }
  }
}