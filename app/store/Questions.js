Ext.define('Qz.store.Questions', {
	extend: 'Ext.data.Store',
	requires: ['Qz.model.Question'],
	proxy: {
		type: 'rest',
		url : '/api/v1/quizbot'
	},
	config: {
		model: 'Qz.model.Question'
//		autoLoad: true
	}
});
