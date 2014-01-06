Ext.define('Qz.model.Ask',{
	extend: 'Ext.data.Model',
	config: {
/*
//		idProperty: 'id',
		identifier: {
			type: 'sequential',
			isUnique: true
		},
*/
		fields: [{
			name: 'questionId'
		},{
			name: 'choiceId'
		}],
		proxy: {
			type: 'rest',
			api: {
				create: 'http://quizapi.dev.pocketmax.me/v1/ask',
				read: 'http://quizapi.dev.pocketmax.me/v1/ask'
			},
			setListeners: {
				exceptionDisabled: function(a,b,c,d){
					console.log(a);
					console.log(b);
					console.log(c);
					console.log(d);
				},
				metachange: function(a,b,c){
					console.log(a);
					console.log(b);
					console.log(c);
				}
			}
		}
	}
});
