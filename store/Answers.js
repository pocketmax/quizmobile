Ext.define('Qz.store.Answers',{
	extend: 'Ext.data.Store',
	requires: ['Qz.model.Answer'],
	config: {
		autoLoad: true,
		model: 'Qz.model.Answer'
	}
});
