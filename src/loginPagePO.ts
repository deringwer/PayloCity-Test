import { t } from 'testcafe';
import XPathSelector from './xPath';

class LoginPage {

     usernameInput = XPathSelector('//input[@id="Username"]');
     passwordInput = XPathSelector('//input[@id="Password"]');
     loginButton   = XPathSelector('//button[@type=\'submit\']\n');

    async login() {
        await t
            .typeText(this.usernameInput, 'TestUser411')
            .typeText(this.passwordInput, 'Vd@gp\'\'!TPHK')
            .click(this.loginButton);
    }
}
export default new LoginPage();
