
import * as vscode from 'vscode';
import * as child_process from 'child_process';
import {GP}  from './constants';
import { Uri } from 'vscode';

export function createPatch(isStaged: boolean) {

    let cwd = vscode.workspace.rootPath;
    let cmd;
    const defaultUri = vscode.Uri.parse(cwd);
    const options:vscode.SaveDialogOptions = {  saveLabel: 'Create patch', filters: {'patch files':['patch', 'diff']} };

    vscode.window.showSaveDialog(options).
    then(function (pathObject) {
        if ( !pathObject.fsPath) {
            vscode.window.showErrorMessage(GP.ERROR_NO_FILE_NAME);
            return;
        }

        if (isStaged) {
            cmd = `git diff --cached > ${pathObject.fsPath}`;
        }
        else {
            cmd = `git diff > ${pathObject.fsPath}`;
        }
        child_process.exec(cmd, {
            cwd: cwd
        }, (error, stdout, stderr) => {
            if (error) {
                vscode.window.showErrorMessage(GP.FAILED_CREATE_PATCH);
            }
            else {
                vscode.window.showInformationMessage(GP.SUCCESS_CREATE_PATCH);
            }
        });
    });


}

export function copyPatchToClipboard(isStaged: boolean) {
    let cwd = vscode.workspace.rootPath;
    let cmd;

    if (isStaged) {
        cmd = 'git diff --cached';
    }
    else {
        cmd = 'git diff';
    }

    child_process.exec(cmd, {
        cwd: cwd
    }, async (error, stdout, stderr) => {
        if (error) {
            vscode.window.showErrorMessage(GP.FAILED_COPY_PATCH);
        }
        else if (stdout.trim() === '') {
            vscode.window.showInformationMessage('No changes to copy to clipboard.');
        }
        else {
            try {
                await vscode.env.clipboard.writeText(stdout);
                vscode.window.showInformationMessage(GP.SUCCESS_COPY_PATCH);
            } catch (clipboardError) {
                vscode.window.showErrorMessage(GP.FAILED_COPY_PATCH);
            }
        }
    });
}