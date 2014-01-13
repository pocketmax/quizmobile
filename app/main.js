/*
Ext.Loader.setConfig({
        enabled: true,
        paths: {
                Qz: ''
        }
});
*/

Ext.application({
	name: 'Qz',
	appFolder: '/js',
	models: ['Ask'],
	stores: ['Answers', 'Questions'],
	views: ['QuestionPanel'],
	controllers: ['Boot'],
	launch: function () {

		Ext.Viewport.add({
			xtype: 'tabpanel',
			fullscreen: true,
			tabBarPosition: 'bottom',
			items: [{
				title: 'question',
				iconCls: 'home',
				xtype: 'questionpanel'
			}]
		});

	}
});

