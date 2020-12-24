# Markdown Renderer
[![Travis CI](https://img.shields.io/travis/com/simplymichael/md-viewer)](https://travis-ci.com/github/simplymichael/md-viewer)
[![Codecov](https://img.shields.io/codecov/c/github/simplymichael/md-viewer)](https://codecov.io/gh/simplymichael/md-viewer)
[![npm](https://img.shields.io/npm/dw/md-viewer)](https://npm.im/md-viewer)
[![GitHub](https://img.shields.io/github/license/simplymichael/md-viewer)](https://github.com/simplymichael/md-viewer/LICENSE.md)

A simple development-time markdown to HTML renderer.

Check that your markdown files (**README.md**, **LICENSE.md**, **CONTRIBUTING.md**)
are properly constructed on your local machine,
rather than waiting until you push to discover markdown errors.

## Features

- Generate HTML files (***.html***) from markdown (***.md***) files
- Output generated HTML file to a default directory or specify a different output directory
- Option to open the generated HTML in the browser immediately after generating it

## Usage

`md-viewer`

### Options

* `--file`,       `-r`: markdown file path, relative to project root; defaults to ***README.md***
* `--output-dir`, `-o`: output directory, relative to project root; defaults to ***.md-viewer***.
  Make sure to add ***.md-viewer*** to your ***.gitignore*** and ***.npmignore*** files
* `--open`,       `-b`: if set, opens the generated HTML in the default browser
* `--help`,       `-h`: show help document

### Examples

- `$ md-viewer`: generate **README.html** from **README.md** and output to ***.md-viewer/README.html***
- `$ md-viewer --open`: generate **README.html**, output to ***.md-viewer/README.html***, and open in browser
- `$ md-viewer --file CONTRIBUTING.md --output-dir docs --open`: generate **CONTRIBUTING.html**, output to ***docs/CONTRIBUTING.html***, and open in browser
