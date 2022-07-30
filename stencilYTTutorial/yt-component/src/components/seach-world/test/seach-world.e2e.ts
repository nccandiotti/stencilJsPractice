import { newE2EPage } from '@stencil/core/testing';

describe('seach-world', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<seach-world></seach-world>');

    const element = await page.find('seach-world');
    expect(element).toHaveClass('hydrated');
  });
});
