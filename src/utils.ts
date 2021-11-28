import * as vscode from 'vscode';
const moment = require('moment');

export function getCustomerConfigValue() {
  const author: string | undefined = vscode.workspace.getConfiguration().get('comments.author'); // 配置项默认值
  const date: string = moment().format('yyyy/MM/DD');
  return {
    author,
    date
  };
}