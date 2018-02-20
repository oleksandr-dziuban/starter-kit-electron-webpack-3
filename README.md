## Electron Webpack Application Starter Kit

Electron clean starter kit. Ready to plug any `JS framework`.
You can fin instructions[here](https://webpack.electron.build/add-ons).

#### Technical stack

* Electron
* Electron Builder
* Webpack

#### Available npm scripts

* `yarn start` - runs the app in development mode
* `yarn compile` - compiles source code and creates webpack output
* `yarn build:clean` - cleans application package `dist` directory
* `yarn build:all` - builds final application packages for `MacOS`, `Windows` and `Linux` platforms
* `yarn build:mac` - builds final application package for `MacOS` platform
* `yarn build:win` - builds final application package for `Windows` platform
* `yarn build:linux` - builds final application package for `Linux` platform

#### Folders structure
* `src/` - application source code folder `[required]`
* `src/main/index.js` - Electron application main entry point. Renders basic application window `[required]`
* `src/renderer/index.js` - Web application main entry point. Renders initial application page `[required]`
* `static/` - static assets folder `[optional]`

#### Additional Webpack configuration
* `webpack.renderer.additions.js` - add required configs here. It is registered in `electron.webpack.json` file.
