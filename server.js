const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const PUBLIC_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.eot': 'application/vnd.ms-fontobject',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mp3': 'audio/mpeg',
  '.pdf': 'application/pdf',
  '.zip': 'application/zip'
};

const server = http.createServer((req, res) => {
  res.on('finish', () => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url} -> ${res.statusCode}`);
  });

  // Only handle GET and HEAD requests
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Method Not Allowed');
    return;
  }

  // Parse URL
  let parsedUrl;
  try {
    parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  } catch (e) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bad Request');
    return;
  }

  let pathname = decodeURIComponent(parsedUrl.pathname);
  let search = parsedUrl.search || '';
  
  // Resolve path
  let filePath = path.join(PUBLIC_DIR, pathname);

  // Security check: ensure path is within PUBLIC_DIR
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Forbidden');
    return;
  }

  // Helper to find the actual file path on disk (handling HTTrack query param file naming)
  function findDiskPath(fPath, qSearch) {
    if (fs.existsSync(fPath)) {
      return fPath;
    }
    if (qSearch) {
      let fPathWithAt = fPath + qSearch.replace(/^\?/, '@');
      if (fs.existsSync(fPathWithAt)) {
        return fPathWithAt;
      }
    }
    let dir = path.dirname(fPath);
    let base = path.basename(fPath);
    if (fs.existsSync(dir)) {
      try {
        let statsDir = fs.statSync(dir);
        if (statsDir.isDirectory()) {
          let files = fs.readdirSync(dir);
          let matches = files.filter(f => f.startsWith(base + '@'));
          if (matches.length > 0) {
            if (qSearch) {
              let queryPart = qSearch.replace(/^\?/, '');
              let bestMatch = matches.find(f => f.includes(queryPart));
              if (bestMatch) return path.join(dir, bestMatch);
            }
            return path.join(dir, matches[0]);
          }
        }
      } catch (e) {}
    }
    return null;
  }

  let actualFilePath = findDiskPath(filePath, search) || filePath;

  fs.stat(actualFilePath, (err, stats) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Not Found');
      return;
    }

    if (stats.isDirectory()) {
      // If directory request doesn't end with a slash, redirect to slash
      if (!pathname.endsWith('/')) {
        res.statusCode = 301;
        res.setHeader('Location', pathname + '/' + (parsedUrl.search || ''));
        res.end();
        return;
      }

      // Serve index.html inside the directory
      const indexFilePath = path.join(filePath, 'index.html');
      fs.stat(indexFilePath, (errIndex, statsIndex) => {
        if (errIndex || !statsIndex.isFile()) {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Directory Index Not Found');
          return;
        }
        serveFile(indexFilePath, indexFilePath, statsIndex, res);
      });
    } else if (stats.isFile()) {
      serveFile(actualFilePath, pathname, stats, res);
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Not Found');
    }
  });
});

function serveFile(filePath, reqPathname, stats, res) {
  const ext = path.extname(reqPathname).toLowerCase();
  
  // Default to text/html for files without extensions, as this site uses extensionless HTML files
  let contentType = MIME_TYPES[ext] || 'text/html';

  res.statusCode = 200;
  res.setHeader('Content-Type', contentType);
  res.setHeader('Content-Length', stats.size);

  const stream = fs.createReadStream(filePath);
  stream.on('error', (streamErr) => {
    console.error(`Error reading file ${filePath}:`, streamErr);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Internal Server Error');
    }
  });
  stream.pipe(res);
}

server.listen(PORT, () => {
  console.log(`\n==================================================`);
  console.log(`  Static Web Server is running!`);
  console.log(`  Local URL: http://localhost:${PORT}`);
  console.log(`  Project Directory: ${PUBLIC_DIR}`);
  console.log(`  Press Ctrl+C to stop the server.`);
  console.log(`==================================================\n`);
});
