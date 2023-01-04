import { module, test } from 'qunit';
import { setupRenderingTest } from 'stardew-companion/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | sc-header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ScHeader />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <ScHeader>
        template block text
      </ScHeader>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
