# @inkdpixels/release-notes-generator
[![Build Status](https://travis-ci.org/Inkdpixels/release-notes-generator.svg)](https://travis-ci.org/Inkdpixels/release-notes-generator) [![Dependency Status](https://david-dm.org/Inkdpixels/release-notes-generator.svg)](https://david-dm.org/inkdpixels/release-notes-generator) [![devDependency Status](https://david-dm.org/Inkdpixels/release-notes-generator/dev-status.svg)](https://david-dm.org/inkdpixels/release-notes-generator#info=devDependencies) [![Code Climate](https://codeclimate.com/github/Inkdpixels/release-notes-generator/badges/gpa.svg)](https://codeclimate.com/github/Inkdpixels/release-notes-generator) [![Test Coverage](https://codeclimate.com/github/Inkdpixels/release-notes-generator/badges/coverage.svg)](https://codeclimate.com/github/Inkdpixels/release-notes-generator/coverage)

> A release-notes-generator plugin for semantic-release.

## Installation
```js
npm i -D @inkdpixels/release-notes-generator
```

## Setup & Configuration
Specify the custom release-notes-generator plugin in your projects `package.json`.

```js
{
  "release": {
    "generateNotes": "@inkdpixels/release-notes-generator"
  }
}
```

## Contributing
We use xo to lint the code, please take care to run `npm test` before you commit something.
If you add or modify methods or the API, please add unit tests as specified in the `*.spec.js` files.

## License
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
