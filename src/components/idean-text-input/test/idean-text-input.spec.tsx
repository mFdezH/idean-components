import { newSpecPage } from '@stencil/core/testing';
import { IdeanTextInput } from '../idean-text-input';

describe('idean-text-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [IdeanTextInput],
      html: `<idean-text-input></idean-text-input>`,
    });
    expect(page.root).toEqualHtml(`
      <idean-text-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </idean-text-input>
    `);
  });
});
