import * as vscode from 'vscode';
import { getCustomerConfigValue } from './utils';

class CommentCompletion implements vscode.CompletionItemProvider{
  provideCompletionItems(document: vscode.TextDocument, position: vscode.Position): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
    const line = document.lineAt(position);
    const lineText = line.text.substring(0, position.character);
    const reg = /(\/\/|\*)\s*@$/;
    const { author, date} = getCustomerConfigValue();
    const completionProps = [`author ${author}`, `date ${date}`, 'desc ', 'event ', 'prop {String} value', 'revision '];
    if(reg.test(lineText)) {
      return completionProps.map(prop => new vscode.CompletionItem(prop,vscode.CompletionItemKind.Snippet));
    }
  }
}


export default CommentCompletion;
