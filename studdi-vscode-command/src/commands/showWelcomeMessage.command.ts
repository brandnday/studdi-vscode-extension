import * as vscode from "vscode";

export const showWelcomeMessage = () => {
  // The code you place here will be executed every time your command is executed
  // Display a message box to the user
  vscode.window.showInformationMessage(
    "Hello World from studdi-vscode-snippets extension!"
  );
};
