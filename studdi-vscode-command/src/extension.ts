// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { showWelcomeMessage } from "./commands/showWelcomeMessage.command";
import { generateAPI } from "./commands/generateAPI.command";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "studdi-vscode-commands" is now active!'
  );

  let disposableShowWelcomeMessage = vscode.commands.registerCommand(
    "studdi-vscode-snippets.showWelcomeMessage",
    showWelcomeMessage
  );

  context.subscriptions.push(disposableShowWelcomeMessage);

  let disposableGenerateAPI = vscode.commands.registerCommand(
    "studdi-vscode-snippets.generateAPI",
    generateAPI
  );

  context.subscriptions.push(disposableGenerateAPI);
}

// This method is called when your extension is deactivated
export function deactivate() {}
