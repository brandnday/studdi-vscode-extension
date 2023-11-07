import { appendFile } from "fs";
import * as vscode from "vscode";

export const generateAPI = async () => {
  if (!vscode.window.activeTextEditor) {
    return;
  }

  const currentOpenedFilePath =
    vscode.window.activeTextEditor.document.fileName;
  // Display a message box to the user
  const quickPickResult = await vscode.window.showQuickPick(
    ["GET", "POST", "PUT", "DELETE"],
    { title: "Select method type" }
  );

  const inputResourceName = await vscode.window.showInputBox({
    title: "Input resource name",
  });

  const APIName = `${quickPickResult?.toLocaleLowerCase()}${inputResourceName
    ?.charAt(0)
    .toUpperCase()}${inputResourceName?.slice(1)}`;
  appendAPIToFile(currentOpenedFilePath, APIName);
};

const appendAPIToFile = async (filePath: string, methodName: string) => {

  const apiBody = `const ${methodName} = ()=>{

  }`


  appendFile(filePath, apiBody, function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
};
