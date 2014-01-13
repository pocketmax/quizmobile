Ext.define('Qz.model.Quizbot', {
	extend: 'Ext.data.Model',
	config: {
		fields: ['question_id', 'choice_id'],
		proxy: {
			type: 'rest',
			url: 'quizapi.dev.pocketmax.me/v1/ask',
			writerTEST: {
				encode: false,
				type: 'json'
			}
		},
		actionMethods: {
			create: 'POST', 
			read: 'GET', 
			update: 'PUT', 
			destroy: 'DELETE'
		}
	}
});
