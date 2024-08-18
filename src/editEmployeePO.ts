import { t } from 'testcafe';
import XPathSelector from './xPath';

class EditUserPage {

    editButton = XPathSelector('//table[@id=\'employeesTable\']//tr[30]//td[9]//i[1]\n');
    firstNameInput = XPathSelector('//input[@id="firstName"]');
    lastNameInput = XPathSelector('//input[@id="lastName"]');
    dependantsInput = XPathSelector('//input[@id="dependants"]');
    updateEmployeeButton = XPathSelector('//button[@id="updateEmployee"]');

    async editUser(firstName: string, lastName: string, dependants: string) {
        await t
            .click(this.editButton)
            .click(this.firstNameInput)
            .pressKey('ctrl+a delete')
            .typeText(this.firstNameInput, firstName)
            .click(this.lastNameInput)
            .pressKey('ctrl+a delete')
            .typeText(this.lastNameInput, lastName)
            .click(this.dependantsInput)
            .pressKey('ctrl+a delete')
            .typeText(this.dependantsInput, dependants)
            .click(this.updateEmployeeButton);
    }

}
export default new EditUserPage();
