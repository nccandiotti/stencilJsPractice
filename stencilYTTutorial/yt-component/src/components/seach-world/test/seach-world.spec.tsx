import { newSpecPage } from '@stencil/core/testing';
import { SeachWorld } from '../seach-world';

describe('seach-world', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SeachWorld],
      html: `<seach-world></seach-world>`,
    });
    expect(page.root).toEqualHtml(`
      <seach-world>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </seach-world>
    `);
  });
});
