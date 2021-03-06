const fs = require('fs');
const chai = require('chai');
const chaiFiles = require('chai-files');
const appRoot = require('app-root-path');
const render = require('../src');
const { expect } = chai;
const { file, dir } = chaiFiles;
const defaultOutputDir = '.markdown-viewer';

chai.use(chaiFiles);

describe('md-renderer', () => {
  it('should create a ".markdown-viewer" directory at the root directory if no directory is passed in', () => {
    render();

    expect(dir(`${appRoot}/${defaultOutputDir}`)).to.exist;

    fs.unlinkSync(`${appRoot}/${defaultOutputDir}/README.html`);
    fs.rmdirSync(`${appRoot}/${defaultOutputDir}`);
  });

  it('should use the project\'s "README.md" if no filename is passed in', () => {
    render();

    expect(file(`${appRoot}/${defaultOutputDir}/README.html`)).to.exist;

    fs.unlinkSync(`${appRoot}/${defaultOutputDir}/README.html`);
    fs.rmdirSync(`${appRoot}/${defaultOutputDir}`);
  });

  it('should throw an error if a non-existent file is passed in', () => {
    const filename = 'i-do-no-exist.md';

    try {
      render(filename);
    } catch(err) {
      expect(err)
        .to.be.an('object')
        .to.have.property('message', `File ${appRoot}/${filename} not found`);
    }
  });

  it('should read the passed file and output the generated HTML to the default directory if no directory is passed', () => {
    const filename = `${__dirname}/TEST.md`;

    render(filename);

    expect(file(`${appRoot}/${defaultOutputDir}/TEST.html`)).to.exist;

    fs.unlinkSync(`${appRoot}/${defaultOutputDir}/TEST.html`);
    fs.rmdirSync(`${appRoot}/${defaultOutputDir}`);
  });

  it('should read the passed file and output the generated HTML to a specified output directory', () => {
    const directory = `${__dirname}`;
    const filename = `${directory}/TEST.md`;

    render(filename, directory);

    expect(file(`${directory}/TEST.html`)).to.exist;

    fs.unlinkSync(`${directory}/TEST.html`);
  });

  it('should read the project\'s README.md and output the generated HTML to specified output directory if no file is specified',  () => {
    const directory = `${__dirname}`;

    render(null, directory);

    expect(file(`${directory}/README.html`)).to.exist;

    fs.unlinkSync(`${directory}/README.html`);
  });

  it('should open the HTML file in the browser if the "open" option is true', async () => {
    const directory = `${__dirname}`;
    const filename = `${directory}/TEST.md`;

    const status = await render(filename, directory, { open: true });

    expect(file(`${directory}/TEST.html`)).to.exist;
    expect(status).to.equal(`${directory}/TEST.html`);

    fs.unlinkSync(`${directory}/TEST.html`);
  });
});
