// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('teste de login com sucesso', async ({ page }) => {
  // Abrir o navegador com o nosso site
  await page.goto('https://automationpratice.com.br/');

  // Clicando em login para abrir a tela de login
  await page.getByRole('link', { name: ' Login' }).click();

  // Preenchendo o campo de email
  await page.locator('#user').fill('teste@gmail.com');

  // Preenchendo o campo de senha
  await page.locator('#password').fill('123456');

  // Clicando no botão de login
  await page.getByRole('button', {name: 'login'}).click();

  // Validando se o usuário foi logado
  await expect(page.getByText('hebertao')).toBeVisible();

});
