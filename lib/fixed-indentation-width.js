'use babel';

import { CompositeDisposable } from 'atom';

export default {

	subscriptions: null,

	activate(state) {
		console.log("fixed-indentation-width loaded");
		this.subscriptions = new CompositeDisposable();
		this.subscriptions.add(atom.workspace.observeTextEditors(editor => {
			this.updateTabWidth(editor);
			this.subscriptions.add(editor.onDidStopChanging(() => this.updateTabWidth(editor)));
		}));
	},

	deactivate() {
		this.subscriptions.dispose();
	},

	updateTabWidth(editor) {
		editor.element.setAttribute("data-tab-width", editor.getTabLength());
	},

	toggle() {
		console.log('FixedIndentationWidth was toggled!');
		return true;
	}

};
