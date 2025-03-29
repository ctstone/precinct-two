import express from 'express';
import { join } from 'node:path';

const PORT = process.env.PORT || 3000;
const __dirname = import.meta.dirname;

console.log(__dirname);

// start a static server
const app = express();
app.use(express.static(join(__dirname, '..', 'static')));
app.use('/css/bootstrap.min.css', express.static(join(__dirname, '..', 'node_modules', 'bootstrap', 'dist', 'css', 'bootstrap.min.css')));
app.use('/js/bootstrap.min.js', express.static(join(__dirname, '..', 'node_modules', 'bootstrap', 'dist', 'js', 'bootstrap.min.js')));
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});