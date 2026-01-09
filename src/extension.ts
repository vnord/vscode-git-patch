'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { createPatch, copyPatchToClipboard } from './create';
import { applyPatch, applyPatchFromClipboard } from './apply';
import { GP }  from './constants';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {


    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposableCPS = vscode.commands.registerCommand('extension.gitCreatePatchFromStaged', async () => {
        // The code you place here will be executed every time your command is executed    
            createPatch(true);
    });
    

    let disposableCPU = vscode.commands.registerCommand('extension.gitCreatePatchFromUnstaged', async () => {
        // The code you place here will be executed every time your command is executed    
        createPatch(false);
    });


    let disposableAP = vscode.commands.registerCommand('extension.gitApplyPatch', async () => {
        applyPatch();
    });

    let disposableCPC = vscode.commands.registerCommand('extension.gitCopyPatchToClipboardFromStaged', async () => {
        copyPatchToClipboard(true);
    });

    let disposableCPCU = vscode.commands.registerCommand('extension.gitCopyPatchToClipboardFromUnstaged', async () => {
        copyPatchToClipboard(false);
    });

    let disposableAPFC = vscode.commands.registerCommand('extension.gitApplyPatchFromClipboard', async () => {
        await applyPatchFromClipboard();
    });


    context.subscriptions.push(disposableCPS);
    context.subscriptions.push(disposableCPU);
    context.subscriptions.push(disposableAP);
    context.subscriptions.push(disposableCPC);
    context.subscriptions.push(disposableCPCU);
    context.subscriptions.push(disposableAPFC);
}

// this method is called when your extension is deactivated
export function deactivate() {
}