# Markdown Viewer
[![Travis CI](https://img.shields.io/travis/com/simplymichael/markdown-viewer)](https://travis-ci.com/github/simplymichael/markdown-viewer)
[![Codecov](https://img.shields.io/codecov/c/github/simplymichael/markdown-viewer)](https://codecov.io/gh/simplymichael/markdown-viewer)
[![npm](https://img.shields.io/npm/dw/markdown-viewer)](https://npm.im/markdown-viewer)
[![GitHub](https://img.shields.io/github/license/simplymichael/markdown-viewer)](https://github.com/simplymichael/markdown-viewer/LICENSE.md)

A simple development-time markdown to HTML renderer.

Check that your markdown files (**README.md**, **LICENSE.md**, **CONTRIBUTING.md**)
are properly constructed on your local machine,
rather than waiting until you push to discover markdown errors.

# Table of Contents

- **[Installation](#installation)**
- **[Features](#features)**
- **[Usage](#usage)**
    - **[Options](#options)**
    - **[Examples](#examples)**
    - **[Using NPM scripts](#using-npm-scripts)**

## Installation
`npm install --save-dev markdown-viewer`

## Features

- Generate HTML files (***.html***) from markdown (***.md***) files
- Output generated HTML file to a default directory or specify a different output directory
- Option to open the generated HTML in the browser immediately after generating it

## Usage

`<project_dir>/node_modules/.bin/markdown-viewer [OPTIONS]`

### Options

* `--file`,       `-r`: markdown file path, relative to project root; defaults to ***README.md***
* `--output-dir`, `-o`: output directory, relative to project root; defaults to ***.markdown-viewer***.
  Make sure to add ***.markdown-viewer*** to your ***.gitignore*** and ***.npmignore*** files
* `--open`,       `-b`: if set, opens the generated HTML in the default browser
* `--help`,       `-h`: show help document

### Examples

- `$ <project_dir>/node_modules/.bin/markdown-viewer`: generate **README.html** from **README.md** and output to ***.markdown-viewer/README.html***
- `$ <project_dir>/node_modules/.bin/markdown-viewer --open`: generate **README.html**, output to ***.markdown-viewer/README.html***, and open in browser
- `$ <project_dir>/node_modules/.bin/markdown-viewer --file CONTRIBUTING.md --output-dir docs --open`: generate **CONTRIBUTING.html**, output to ***docs/CONTRIBUTING.html***, and open in browser

### Using NPM scripts
You can add the following stanzas to the *scripts* section of your ***package.json*** file:
- `"view-readme": "./node_modules/.bin/markdown-viewer -b",`
- `"view-contributing": "./node_modules/.bin/markdown-viewer -f CONTRIBUTING.md -b",`
- `"view-license": "./node_modules/.bin/markdown-viewer -f LICENSE.md -b"`

Then you can run:
- `npm run view-readme` to view the output of *README.md*
- `npm run view-contributing` to view the output of the *CONTRIBUTING.md* file
- `npm run view-license` to view the output of the *LICENSE.md* file
