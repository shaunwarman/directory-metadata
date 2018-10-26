# directory-metadata

[![build status](https://img.shields.io/travis/shaunwarman/directory-metadata.svg)](https://travis-ci.com/shaunwarman/directory-metadata)
[![code coverage](https://img.shields.io/codecov/c/github/shaunwarman/directory-metadata.svg)](https://codecov.io/gh/shaunwarman/directory-metadata)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/shaunwarman/directory-metadata.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/directory-metadata.svg)](https://npm.im/directory-metadata)

> A simple module to get directory or file metadata

## Table of Contents
* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)

## Install

[npm][]:

```sh
npm install directory-metadata
```

[yarn][]:

```sh
yarn add directory-metadata
```


## Usage

```js
const {getFileMetadata, getDirectoryMetadata} = require('directory-metadata');

const directoryMetadata = getDirectoryMetadata(dirpath);
console.log(directoryMetadata);
// {
//   directorySize: 14535,
//   fileCount: 24,
//   fileTypes: {
//     js: 18,
//     css: 4,
//     html: 2
//   }
// }
```


## Contributors
| Name             | Website                   |
| ---------------- | ------------------------- |
| **Shaun Warman** | <https://shaunwarman.com> |

## License
[MIT](LICENSE) © [Shaun Warman](https://shaunwarman.com)

##

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
