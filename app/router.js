import EmberRouter from '@ember/routing/router';
import config from 'stardew-companion/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('activities', function () {
    this.route('fishing', function () {
      this.route('index', { path: '/' });
      this.route('location');
      this.route('weather');
    });
  });
});
