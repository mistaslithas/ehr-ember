var ChartsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('chart');
    }
});

export default ChartsRoute;