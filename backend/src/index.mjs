import express from 'express';
import { join } from 'node:path';
import { readFileSync } from 'node:fs'

const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;
const staticDir = join(__dirname, '..', 'static', 'browser');

function defaultContent(filePath, contentType) {
  const content = readFileSync(filePath, 'utf-8');
  return (_, res) => res.set('content-type', contentType).send(content)
}

const app = express();
app
  .use(
    express.static(staticDir, { fallthrough: true }),
    defaultContent(join(staticDir, 'index.html'), 'text/html'))
  .listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });