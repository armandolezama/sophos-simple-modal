import { fixture, assert } from "@open-wc/testing";
import '../sophos-simple-modal';

describe('Suite cases', () => {
  it('First Test', async () => {
      const _element = await fixture('<sophos-simple-modal></sophos-simple-modal>');
      _element.styleTemplate = 'full header'
      _element.showNavigationBar = true;
      _element.showHeader = true;
      assert.strictEqual(_element.styleTemplate, 'full header');
      assert.strictEqual(_element.showNavigationBar, true);
      assert.strictEqual(_element.showHeader, true);
  });
});