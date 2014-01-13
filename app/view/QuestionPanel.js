Ext.define('Qz.view.QuestionPanel', {
	extend: 'Ext.Panel',
	xtype: 'questionpanel',
//	iconCls: 'user',
//	layout: 'vbox',
	loadQuestion: function (cfg) {

		var	qblock = this.getComponent('qblock'),
			heading = this.getComponent('heading'),
			sendbutton = this.getComponent('sendbutton');

		qblock.setTitle(cfg.label);

		heading.setTitle(cfg.categoryLabel);

		this.questionId = cfg.id;

		qblock.removeAll(true);

		for (var i in cfg.choices) {

			qblock.add({
				label: cfg.choices[i].label,
				itemId: cfg.choices[i].id
			});
		}

	},
	config: {
		items: [{
			xtype: 'toolbar',
			docked: 'top',
			itemId: 'heading'
		}, {
			xtype: 'fieldset',
			itemId: 'qblock',
			instructions: 'Please choose an option',
			defaults: {
				labelWrap: true,
				xtype: 'radiofield',
				name: 'answer'
			}
		}, {
			xtype: 'button',
			text: 'Send',
			itemId: 'sendbutton',
			ui: 'confirm'
		}]
	}
});
