import { newE2EPage } from '@stencil/core/testing';

describe('idean-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<idean-card></idean-card>');

    const element = await page.find('idean-card');
    expect(element).toHaveClass('hydrated');
  });
});
