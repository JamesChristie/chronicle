const fs = require('fs');
const Sass = require('node-sass');

const buildParameters = (process.argv || []).slice(2);;

const entryFilePath = buildParameters[0];
const outputPath = buildParameters[1];

const renderedContent = Sass.renderSync({ file: entryFilePath });
const encodedContent = renderedContent.css.toString('utf8');

fs.writeFileSync(outputPath, encodedContent, { encoding: 'utf8' });
