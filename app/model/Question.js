Ext.define('Qz.model.Question', {
	extend: 'Ext.data.Model',
	config: {
		fields: [{
			name: 'id',
			type: 'int'
		}, {
			name: 'categoryLabel'
		}, {
			name: 'questionLabel'
		}, {
			name: 'choices'
		}]
	}
});
