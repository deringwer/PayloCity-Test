import loginPage from './loginPagePO';
import EditUserPage from "./editEmployeePO";
import DashboardPage from "./addEmployeePO";
import DeleteUserPage from "./deleteEmployeePO";


fixture `Add Employee Test`
    .page `https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/LogIn`;

test('should add employee', async t => {
    // Log in using the login page object
    await loginPage.login();
    await DashboardPage.addUser('Anna', 'Grey', '25');
});

fixture `Edit Employee Test`
    .page `https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/LogIn`;

test('should edit employee', async t => {
    // Log in using the login page object
    await loginPage.login();
    await EditUserPage.editUser('Sveta', 'Brown', '15');
});

fixture `Delete Employee Test`
    .page `https://wmxrwq14uc.execute-api.us-east-1.amazonaws.com/Prod/Account/LogIn`;

test('should delete employee', async t => {
    // Log in using the login page object
    await loginPage.login();
    await DeleteUserPage.deleteUser();
});
