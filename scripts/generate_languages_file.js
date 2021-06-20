#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const projectRootPath = path.resolve(__dirname, '../');
const i18nPath = path.resolve(projectRootPath, 'i18n/locales');
const outputFilePath = path.join(projectRootPath, 'languages.json')


const languages = []

fs.readdirSync(i18nPath).forEach(file => {

  const json = JSON.parse(fs.readFileSync(i18nPath + '/' + file));

  const language = {
    code: file.split('.')[0],
    file: file,
    name: json.meta.name
  };

  if (json.meta.dir !== null && json.meta.dir !== undefined) {
    language.dir = json.meta.dir;
  }

  languages.push(language)
});

fs.writeFileSync(outputFilePath, JSON.stringify(languages));