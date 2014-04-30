var Router = Ember.Router.extend(); // ensure we don't share routes between all Router instances

Router.map(function() {
  this.route('dashboard');
  this.route('schedule');
  this.route('tasks');
  this.resource('charts', function() {
    this.resource('chart', {path: '/:chart_id'}, function() {
      this.route('summary');
      this.route('timeline');
      this.route('profile');
      this.route('encounter');
    });
  });
  this.route('messages');
  this.route('reports');
  this.route('settings');
  // this.route('component-test');
  // this.route('helper-test');
 });

export default Router;
