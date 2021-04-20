import { newSpecPage } from '@stencil/core/testing';
import { IdeanButton } from '../idean-button';

describe('idean-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IdeanButton],
      html: `<idean-button></idean-button>`,
    });
    expect(page.root).toEqualHtml(`
      <idean-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </idean-button>
    `);
  });
});
