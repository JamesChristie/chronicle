const fs = require('fs');
const Mustache = require('mustache');

const buildParameters = (process.argv || []).slice(2);

const templateFilePath = buildParameters[0];
const compiledTypeScriptPath = buildParameters[1];
const compiledSassPath = buildParameters[2];
const outputPath = buildParameters[3];

const useErrorReporter = function(message) {
  return function(error, content) {
    if (!error) return;

    console.log("Error encountered when reading file: " + message)
    throw error;
  }
};

const templateContent = fs.readFileSync(templateFilePath, 'utf8', useErrorReporter("Could not read Mustache template"));
const javaScriptContent = fs.readFileSync(compiledTypeScriptPath, 'utf8', useErrorReporter("Could not read compiled TypeScript"));
const cssContent = fs.readFileSync(compiledSassPath, 'utf8', useErrorReporter("Could not read compiled Sass"))

const contentConfiguration = {
  COMPILED_TYPESCRIPT_CONTENT: javaScriptContent,
  COMPILED_SASS_CONTENT: cssContent
};

console.log("Rendering app content");
const renderedContent = Mustache.render(templateContent, contentConfiguration);

console.log("Writing rendered app to file");
fs.writeFileSync(outputPath, renderedContent, { encoding: 'utf8' });
