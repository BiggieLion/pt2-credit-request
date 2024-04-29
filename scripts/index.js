require('dotenv/config');
const fs = require('fs');
const path = require('path');
const pkg = require('../../package.json');

const BASE_PATH = process.cwd();
const DIST_DIR = 'dist';
const SWAGGER_PATH = pkg.config.api.swaggerPath;

const NODE_MODULES_DIR = 'node_modules';
const SWAGGER_UI_DIR = 'swagger-ui-dist';

(function () {
  const SWAGGER_DOC_DIR = path.join(BASE_PATH, DIST_DIR, SWAGGER_PATH);

  fs.mkdirSync(SWAGGER_DOC_DIR, { recursive: true });

  const SWAGGER_UI_PATH = path.join(
    BASE_PATH,
    NODE_MODULES_DIR,
    SWAGGER_UI_DIR,
  );

  const SwaggerFiles = fs.readdirSync(SWAGGER_UI_PATH, { encoding: 'utf-8' });

  for (const file of SwaggerFiles) {
    const filePath = path.join(SWAGGER_UI_PATH, file);
    const destPath = path.join(SWAGGER_DOC_DIR, file);

    fs.copyFileSync(filePath, destPath, fs.constants.COPYFILE_EXCL, (error) => {
      console.log(error);
    });
  }
})();
