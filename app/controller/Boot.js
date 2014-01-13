Ext.define('Qz.controller.Boot', {
	extend: 'Ext.app.Controller',
	itemId: 'Boot',
	config: {
		refs: {	
			saveButton: 'viewport questionpanel button'
		},
		control: {
			viewport: {
				ready: function (vp) {
				},
				show: function (vp) {
				}
			},			
			tabpanel: {
				activate: function (panel) {

					var	model = Ext.ModelManager.getModel('Qz.model.Ask'),
						qPanel = panel.query('questionpanel')[0];

					panel.mask({ message: 'loading...' });

					model.load(0, {
						scope: this,
						success: function (rec, op) {
							var	q = rec.raw, 
								choices = [];

							for (var i in q.choices ) {
								choices.push({
									label: q.choices[i].label,
									id: q.choices[i]._id
								});
							}

							qPanel.loadQuestion({
								label: q.label,
								id: q._id,
								categoryLabel: q.categoryLabel,
								choices: choices
							});

							panel.unmask();

						}
					});
				}
			},
			saveButton: {
				tap: function (a) {

					var	qPanel = a.parent,
						answer = qPanel.query('radiofield[name=answer][@checked]')[0],
						askBot = Ext.ModelManager.getModel('Qz.model.Ask'),
						myAskBot = new askBot();

					if (!answer) {
						return false;
					}

					myAskBot.setData({
						questionId: qPanel.questionId,
						choiceId: answer.getItemId()
					});

					myAskBot.save({
						success: function (a, b) {

							var	results = Ext.decode(b.getResponse().responseText),
								nextQ = results.nextQuestion;

							if (!results.correctAnswer.explain) {
								results.correctAnswer.explain = 'no explanation';
							}

							var nextQuestion = function () {

								var myChoices = [];

								for (var i in nextQ.choices) {
									myChoices.push({
										label: nextQ.choices[i].label,
										id: nextQ.choices[i]._id
									});
								}

								qPanel.loadQuestion({
									label: nextQ.label,
									id: nextQ._id,
									categoryLabel: nextQ.categoryLabel,
									choices: myChoices
								});

							};

							if (results.correct) {
								Ext.Msg.alert('Correct', results.correctAnswer.explain, nextQuestion);
							} else {
								Ext.Msg.alert('Wrong', results.correctAnswer.explain, nextQuestion);
							}

						}
					});
				}
			}
		}
	},
	init: function () {
	}
});
