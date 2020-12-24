#!/usr/bin/env node

const meow = require('meow');
const minimist = require('minimist');
const appRoot = require('app-root-path');
const render = require('.');
const defaultOutputDir = '.md-viewer';
const opts = minimist(process.argv.slice(2), {
  string: ['file'],
  boolean: ['open'],
  alias: { f: 'file', o: 'output-dir', b: 'open' }
});

const file = opts.file || 'README.md';
const outputDir = opts['output-dir'] || defaultOutputDir;
const open = opts.open;

meow(`
  Usage:
    md-viewer

    Options
      --file,       -r  markdown file path, relative to project root; defaults to "README.md"
      --output-dir, -o output directory, relative to project root; defaults to ".md-viewer"
      --open,       -b  if set, opens the generated HTML in the default browser
      --help,       -h show this help document

    Examples
      $ md-viewer (generate README.html from README.md and output to ".md-viewer/README.html")
      $ md-viewer --file CONTRIBUTING.md --output-dir docs --open (genereate CONTRIBUTING.html, output to "docs/CONTRIBUTING.html", and open in browser)
`, {
  flags: {
    file: {
      type: 'string',
      alias: 'f'
    },
    'output-dir': {
      type: 'string',
      alias: 'o'
    },
    open: {
      type: 'boolean'
    },
    help: {
      type: 'boolean',
      alias: 'h'
    }
  }
});

render(`${appRoot}/${file}`, `${appRoot}/${outputDir}`, { open });
