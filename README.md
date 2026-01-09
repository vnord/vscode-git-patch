# Git Patch #

> IDE's like Intellij provides a feature to *create* and *apply* a patch. This is an attempt to have the same feature available for VSCODE.

## [1.0.0] - 2026-01-09
### Added
> * **Clipboard Support**: Copy patches to clipboard and apply patches from clipboard
> * Updated to modern VSCode extension APIs and latest dependencies
> * Improved TypeScript compilation and testing setup

### Changed
> * Major dependency updates for better performance and compatibility
> * Modernized extension structure with current VSCode development practices

## [0.2.0] - 2018-02-05
### Added

> * Better way to create & apply patch via dialog.

> * Save patch at custom location.


## Features

> * **File-based operations:**
>   * Creates a GIT patch from `Staged` files on the fly.
>   * Creates a GIT patch from `Unstaged` files on the fly.
>   * `Apply` a patch by `selecting` a patch file on the fly.

> * **Clipboard operations:**
>   * Copy patch from `Staged` files to clipboard.
>   * Copy patch from `Unstaged` files to clipboard.
>   * Apply patch from clipboard content.

## How this works

  ![Git create patch preview](https://raw.githubusercontent.com/vnord/vscode-git-patch/master/images/vscode.gif)

 

## Requirements
You must have `git` installed already.


## Known Issues
- Patch sometimes fails due to HUNK errors. 
- Patch doesn't take care of conflicts, if any.

Kindly provide your feedback to improve this extension.

**Enjoy!**
