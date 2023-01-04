import { module, test } from 'qunit';
import { setupTest } from 'stardew-companion/tests/helpers';

module('Unit | Service | sc-filters', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:sc-filters');
    assert.ok(service);
  });
});
