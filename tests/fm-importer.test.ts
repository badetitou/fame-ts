import { FMImporter } from "../src/importer/fm-importer";

export {}

describe('FMImporter', () => {
  xit('can read the file', () => {
    const fs = require('fs');
    const content = fs.readFileSync('./res/famix.json', 'utf8');
  })

  xit('can create importer', () => {
    const fs = require('fs');
    const content = fs.readFileSync('./res/famix.json', 'utf8');
    new FMImporter(content)
  })

  xit('can extract', () => {
    const fs = require('fs');
    const content = fs.readFileSync('./res/famix.json', 'utf8');
    new FMImporter(content).extract()
  })

})
