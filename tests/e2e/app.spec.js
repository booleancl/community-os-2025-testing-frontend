import { test, expect } from '@playwright/test';

test.describe('Event registration app', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); // URL donde corre tu app Vite
  });

  test('should show discount message on load', async ({ page }) => {
    const discountMessage = await page.locator('#discountMessage').textContent();
    expect(discountMessage).toMatch(/descuento/);
  });

  test('should allow user to fill and submit the form', async ({ page }) => {
    await page.fill('#name', 'Gonzalo');
    await page.fill('#email', 'gonzalo@example.com');

    // Escuchar alert
    page.on('dialog', dialog => {
      expect(dialog.message()).toContain('Gracias');
      dialog.accept();
    });

    await page.click('button[type="submit"]');

    // Verificar que el form se haya reseteado
    expect(await page.inputValue('#name')).toBe('');
    expect(await page.inputValue('#email')).toBe('');
  });

  test('should display map container', async ({ page }) => {
    const map = page.locator('#map');
    await expect(map).toBeVisible();
  });
});
