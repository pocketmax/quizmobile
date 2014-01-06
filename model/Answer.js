Ext.define('Qz.model.Answer',{
	extend: 'Ext.data.Model',
	config: {
//		idProperty: 'id',
		identifier: {
			type: 'sequential',
			isUnique: true
		},
		fields: [{
//			name: 'qid'
//		},{
			name: 'id',
			type: 'int'			
		},{
			name: 'correct'
		},{
			name: 'stamp',
			type: 'date'
		}],
		proxy: {
			type: 'localstorage',
			id: 'answers'
		}
	}
});
