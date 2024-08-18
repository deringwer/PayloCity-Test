import { t } from 'testcafe';
import XPathSelector from './xPath';

class DashboardPage {

    addButton = XPathSelector('//button[@id="add"]');
    firstNameInput = XPathSelector('//input[@id="firstName"]');
    lastNameInput = XPathSelector('//input[@id="lastName"]');
    dependantsInput = XPathSelector('//input[@id="dependants"]');
    addEmployeeButton = XPathSelector('//button[@id="addEmployee"]');

    async addUser(firstName: string, lastName: string, dependants: string) {
        await t
            .click(this.addButton)
            .typeText(this.firstNameInput, firstName)
            .typeText(this.lastNameInput, lastName)
            .typeText(this.dependantsInput, dependants)
            .click(this.addEmployeeButton);
    }

}
export default new DashboardPage();
