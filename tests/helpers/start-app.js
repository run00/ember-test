import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';

export default function startApp(attrs) {
	var attributes = Ember.merge({}, config.APP);
	attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

	var application;
	Ember.run(function() {
		application = Application.create(attributes);
		application.setupForTesting();
		application.injectTestHelpers();
	});

	return application;
}
