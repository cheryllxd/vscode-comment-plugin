import * as vscode from 'vscode';
import { getCustomerConfigValue } from './utils';

function getEditorConfig() {
  const editor: vscode.TextEditor | undefined= vscode.window.activeTextEditor;
  const languageId = editor?.document.languageId || '';
  const line = editor?.selection.active.line || 0;
  return {
    editor,
    languageId,
    line
  };
}

function createNewComment() {
  const { editor, languageId, line } = getEditorConfig();
  const { author, date } = getCustomerConfigValue();
  let commentTemplate = '';
  if(['javascript', 'typescript'].includes(languageId)) {
    commentTemplate =
    `/**\n * @desc js\n * @author ${author}\n * @date ${date}\n */\n`;
    
  } else if(languageId === 'vue') {
    commentTemplate = 
    `/**\n * @desc js\n * @author ${author}\n * @date ${date}\n * @prop {String} value\n * @event\n*/\n`;
  }
  editor?.edit((editBuilder) => {
    editBuilder.insert(new vscode.Position(line, 0), commentTemplate); // 插入
  });
}

function createRevisionComment() {
  const { editor, line } = getEditorConfig();
  const { author, date } = getCustomerConfigValue();
  let commentTemplate =
  ` *\n * @revision revision\n * @author ${author}\n * @date ${date}\n`;
  editor?.edit((editBuilder) => {
    editBuilder.insert(new vscode.Position(line, 0), commentTemplate); // 插入
  });
}

const commentCommand = (context: vscode.ExtensionContext) => {
  context.subscriptions.push(vscode.commands.registerCommand('extension.createNewComment', () => {
    createNewComment();
  }));
  context.subscriptions.push(vscode.commands.registerCommand('extension.createRevisionComment', () => {
    createRevisionComment();
  }));
};

export default commentCommand;