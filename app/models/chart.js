var Chart = DS.Model.extend({
	patient: DS.belongsTo('patient')
});

Chart.FIXTURES = [
	{
		id: 1,
		patient: '1'
	},
	{
		id: 2,
		patient: '2'
	}
];

export default Chart;