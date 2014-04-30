var ChartRoute = Ember.Route.extend({
    model: function(params) {
        return this.modelFor('charts').findBy('id', params.chart_id);
    }
});

export default ChartRoute;