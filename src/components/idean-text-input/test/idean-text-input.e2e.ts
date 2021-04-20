import { newE2EPage } from '@stencil/core/testing';

describe('idean-text-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<idean-text-input></idean-text-input>');

    const element = await page.find('idean-text-input');
    expect(element).toHaveClass('hydrated');
  });
});
