import * as vscode from 'vscode';
import commentCommand from './commentCommand';
import CommentCompletion from './commentCompletion';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	commentCommand(context);
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      ['javascript', 'vue', 'typescript'], 
      new CommentCompletion(),
      '@'
    )
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
