const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = require('recursive-readdir');

const fsStat = promisify(fs.stat);

async function getDirectoryMetadata(dirpath) {
  const metadata = {
    directorySize: 0,
    fileCount: 0,
    fileTypes: {}
  };

  if (typeof dirpath !== 'string') {
    throw new TypeError('path must be a string!');
  }

  const stat = await fsStat(dirpath);
  if (!stat.isDirectory()) {
    throw new Error('path must be a reference to a directory!');
  }

  const files = await readdir(dirpath);
  for (const file of files) {
    const { fileSize, fileType } = await getFileMetadata(file);

    metadata.directorySize += fileSize;
    if (metadata.fileTypes[fileType]) {
      metadata.fileTypes[fileType] += 1;
    } else {
      metadata.fileTypes[fileType] = 1;
    }
  }
  metadata.fileCount = files.length;

  return metadata;
}

async function getFileMetadata(filepath) {
  let fileType = null;
  if (typeof filepath !== 'string') {
    throw new TypeError('path must be a string!');
  }

  const stat = await fsStat(filepath);
  if (!stat.isFile()) {
    throw new Error('path must be a reference to a file!');
  }

  const filename = path.basename(filepath);
  fileType = filename.split('.').pop();
  if (!filename.includes('.'))
    fileType = 'text';

  if (filename.startsWith('.'))
    fileType = 'text';

  return {
    fileSize: stat.size,
    fileType
  };
}

module.exports = {
  getDirectoryMetadata,
  getFileMetadata
};
