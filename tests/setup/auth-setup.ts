import { test as setup, type Page } from '@playwright/test';
import LoginPage from '../ui/pages/login-page';
import uiPages from '../utils/uiPages';

const userFile = '.auth/user.json';

setup('authenticate', async ({ page }) => {
    const user = process.env.USERNAME!;
    const password = process.env.PASSWORD!;
    await doLogin(page, user, password);
    await page.context().storageState({ path: userFile });
});

async function doLogin(page: Page, user:string, password: string) {
    const baseURL = setup.info().project.use.basRfeURL!;
    const loginPage = new LoginPage(page);
  
    await page.goto(baseURL!+uiPages.login);
    await loginPage.doLogin(user, password);
    await page.waitForURL(baseURL+uiPages.login);
    await loginPage.checkLoggedIn();
}
 