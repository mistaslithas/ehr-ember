var ApplicationController = Ember.Controller.extend({
	carbonNav: [
		Ember.Object.create({title:'Home', linkTo:'index'}),
		Ember.Object.create({title:'Schedule', linkTo:'schedule'}),
		Ember.Object.create({title:'Dashboard', linkTo:'dashboard'}),
		Ember.Object.create({title:'Tasks', linkTo:'tasks'}),
		Ember.Object.create({title:'Charts', linkTo:'charts'}),
		Ember.Object.create({title:'Messages', linkTo:'messages'}),
		Ember.Object.create({title:'Reports', linkTo:'reports'})
	],
	utilityNav: [
		Ember.Object.create({title:'Settings', linkTo:'settings'})
	],
	actions:{
		logout:function(){
			alert('Logging out...');
		},
		flexTo:function(type){
			alert('Getting my ' + type + ' flex on...');
		}
	}
});

export default ApplicationController;