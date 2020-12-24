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

## Installation
`npm install --save-dev markdown-viewer`

## Features

- Generate HTML files (***.html***) from markdown (***.md***) files
- Output generated HTML file to a default directory or specify a different output directory
- Option to open the generated HTML in the browser immediately after generating it

## Usage

`markdown-viewer`

### Options

* `--file`,       `-r`: markdown file path, relative to project root; defaults to ***README.md***
* `--output-dir`, `-o`: output directory, relative to project root; defaults to ***.markdown-viewer***.
  Make sure to add ***.markdown-viewer*** to your ***.gitignore*** and ***.npmignore*** files
* `--open`,       `-b`: if set, opens the generated HTML in the default browser
* `--help`,       `-h`: show help document

### Examples

- `$ markdown-viewer`: generate **README.html** from **README.md** and output to ***.markdown-viewer/README.html***
- `$ markdown-viewer --open`: generate **README.html**, output to ***.markdown-viewer/README.html***, and open in browser
- `$ markdown-viewer --file CONTRIBUTING.md --output-dir docs --open`: generate **CONTRIBUTING.html**, output to ***docs/CONTRIBUTING.html***, and open in browser
