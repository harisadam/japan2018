import EmberObject from '@ember/object';
import CoordinatesMixin from 'japan2018/mixins/coordinates';
import { module, test } from 'qunit';

module('Unit | Mixin | coordinates', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let CoordinatesObject = EmberObject.extend(CoordinatesMixin);
    let subject = CoordinatesObject.create();
    assert.ok(subject);
  });
});
