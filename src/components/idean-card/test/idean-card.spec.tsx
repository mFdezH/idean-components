import { newSpecPage } from '@stencil/core/testing';
import { IdeanCard } from '../idean-card';

describe('idean-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IdeanCard],
      html: `<idean-card></idean-card>`,
    });
    expect(page.root).toEqualHtml(`
      <idean-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </idean-card>
    `);
  });
});
