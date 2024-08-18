import { t } from 'testcafe';
import XPathSelector from './xPath';

class DeleteUserPage {

    deleteIcon = XPathSelector('//table[@id=\'employeesTable\']//tr[30]//td[9]//i[2]\n');
    deleteButton = XPathSelector('//button[@id="deleteEmployee"]');

    async deleteUser() {
        await t
            .click(this.deleteIcon)
            .click(this.deleteButton)
    }
}
export default new DeleteUserPage();
