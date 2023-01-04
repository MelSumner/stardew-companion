import { module, test } from 'qunit';
import { setupTest } from 'stardew-companion/tests/helpers';

module('Unit | Route | activities/fishing/weather', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:activities/fishing/weather');
    assert.ok(route);
  });
});
