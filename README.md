# Cerebro

<img src="./build/icons/128x128.png" align="right"/>

[![Build Status][travis-image]][travis-url]
[![Dependency Status][david_img]][david_site]

## Usage
You can download the latest version on  [releases](https://github.com/KELiON/cerebro/releases) page.

After installation use default shortcut `ctrl+space` to show an app window. You can customize this shortcut clicking on icon in menu bar → preferences.

![Cerebro](https://cloud.githubusercontent.com/assets/594298/20180624/858a483a-a75b-11e6-94a1-ef1edc4d95c3.gif)

## Plugins
### Core plugins
* Search in the web with google suggestions;
* Search & launch application, i.e. `spotify`;
* Navigate in file system with file previews (i.e. `~/Dropbox/passport.pdf`);
* Calculator;
* Smart converter. `15$`, `150 рублей в евро`, `100 eur in gbp`;

### Install and manage custom plugins
Use built-in `plugins` command to search and manage custom plugins.

Discover plugins and more at [Cerebro's Awesome List](https://github.com/lubien/awesome-cerebro).

## Development

If you have any questions feel free to chat in gitter: https://gitter.im/KELiON-cerebro.

### Create plugin
Check out [plugins documentation](./docs/plugins.md).

### Install

First, clone the repo via git:

```bash
$ git clone https://github.com/KELiON/cerebro.git cerebro
```

And then install dependencies:

```bash
$ cd cerebro && yarn && cd ./app && yarn && cd ../
```

### Run
```bash
$ yarn run dev
```

> Note: requires a node version >=6.x

### Resolve common issues
1. `AssertionError: Current node version is not supported for development` on npm postinstall.
After `yarn` postinstall script checks node version. If you see this error you have to check node and npm version in `package.json` `devEngines` section and install proper ones.

2. `Uncaught Error: Module version mismatch. Exepcted 50, got ...`
This error means that node modules with native extensions build with wrong node version (your local node version != node version, included to electron). To fix this issue run `cd ./app && yarn run rebuild`

#### Config file path


*Windows*: `%APPDATA%/Cerebro/config.json`

*Linux*: `$XDG_CONFIG_HOME/Cerebro/config.json`  or `~/.config/Cerebro/config.json`

*macOS*: `~/Library/Application Support/Cerebro/config.json`


### Package
Use this command to build `.app` file:

```bash
$ yarn run package
```


## License
MIT © [Alexandr Subbotin](https://github.com/KELiON)

MIT © [Mohamed Wageh](https://github.com/devmedoo)

[travis-image]: https://travis-ci.org/devmedoo/cerebro.svg?branch=master
[travis-url]: https://travis-ci.org/devmedoo/cerebro
[david_img]: https://img.shields.io/david/devmedoo/cerebro.svg
[david_site]: https://david-dm.org/devmedoo/cerebro
