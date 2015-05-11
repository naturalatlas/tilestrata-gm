# tilestrata-gm
[![NPM version](http://img.shields.io/npm/v/tilestrata-gm.svg?style=flat)](https://www.npmjs.org/package/tilestrata-gm)
[![Build Status](http://img.shields.io/travis/naturalatlas/tilestrata-gm/master.svg?style=flat)](https://travis-ci.org/naturalatlas/tilestrata-gm)
[![Coverage Status](http://img.shields.io/coveralls/naturalatlas/tilestrata-gm/master.svg?style=flat)](https://coveralls.io/r/naturalatlas/tilestrata-gm)

A [TileStrata](https://github.com/naturalatlas/tilestrata) plugin for manipulating and transcoding tile images with [GraphicsMagick](http://www.graphicsmagick.org/) via [gm](http://aheckmann.github.io/gm/docs.html).

```sh
$ npm install tilestrata-gm --save
```

### Sample Usage

```js
var gm = require('tilestrata-gm');

server.layer('mylayer').route('tile-contrast.png')
    .use(yourprovider)
    .use(gm(function(image) {
        return image.resize(256).contrast(5);
    }));
```

## Contributing

Before submitting pull requests, please update the [tests](test) and make sure they all pass.

```sh
$ npm test
```

## License

Copyright &copy; 2015 [Natural Atlas, Inc.](https://github.com/naturalatlas) & [Contributors](https://github.com/naturalatlas/tilestrata-gm/graphs/contributors)

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at: http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
