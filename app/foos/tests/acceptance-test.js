import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'ember-test/tests/helpers/start-app';

module('Acceptance | foos', {
	beforeEach: function() {
		this.application = startApp();
	},

	afterEach: function() {
		Ember.run(this.application, 'destroy');
	}
});

test('should show a list of foos', function(assert) {
	assert.expect(3);
	visit('/foos');

	andThen(function() {
		assert.equal(currentURL(), '/foos');

		var foos = find('.foo-list .foo-list-item');
		assert.equal(foos.length, 2);

		var foo = find('.foo-list .foo-list-item:eq(0) .foo-list-item-name');
		assert.equal(foo.text().trim(), 'kung-fu');
	});
});

test('should navigate to foo when item is clicked', function(assert) {
	assert.expect(1);
	visit('/foos');

	click('.foo-list .foo-list-item:eq(0) .foo-list-item-name');
	andThen(function() {
		assert.equal(currentURL(), '/foos/1');
	});
});
