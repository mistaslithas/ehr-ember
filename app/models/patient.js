var Patient = DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	dob: DS.attr('date'),
	gender: DS.attr('string'),
	
	fullName: function() {
		return this.get('firstName') + ' ' + this.get('lastName');
	}.property('firstName', 'lastName')
});

Patient.FIXTURES = [
	{
		id: 1,
		firstName: 'Sarah',
		lastName: 'Williams',
		dob: '1980-02-05',
		gender: 'Female'
	},
	{
		id: 2,
		firstName: 'Alfred',
		lastName: 'Zhang',
		dob: '1950-04-12',
		gender: 'Male'
	}
];

export default Patient;