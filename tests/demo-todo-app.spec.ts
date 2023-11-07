import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  const inputLogin = page.locator("#session_key");
  const inputPass = page.locator("#session_password");
  const signInButton = page.getByText("Sign in").nth(2)
  await page.goto('https://www.linkedin.com');
  await inputLogin.fill(user)
  await inputPass.fill(password)
  await signInButton.click()
});

const TITLES = ['QA',
'SDET',
'Software Development Engineer in Test',
'Software Engineer in test'
]

const user = 'cial.dev.inc@getMaxListeners.com';
const password = 'FindMePlaywrightJobs';

test.describe('Find Playwright jobs', () => {
  test('should allow me to find jobs', async ({ page }) => {
    // create a new todo locator
    const jobTitle = page.getByPlaceholder("Search by title, skill, or company");
    const jobLocation = page.getByPlaceholder("City, state, or zip code");

    // Fill
    await jobTitle.fill(TITLES[0]);
    await jobLocation.fill('EMEA');
    await jobLocation.press('Enter');

    // Make sure the list now has two todo items.
    await expect(page.getByRole("alert")).not.toBeVisible()
  });
});