import { newE2EPage } from '@stencil/core/testing';

describe('idean-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<idean-button></idean-button>');

    const element = await page.find('idean-button');
    expect(element).toHaveClass('hydrated');
  });
});
