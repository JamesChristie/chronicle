# Chronicle

Chronicle is an app to automate DBT diary cards while providing the user complete control of their data and visibility into the software. This app aims to provide a place to enter your daily information without advetisements, without proprietary code, and without sending your data anywhere without your explicit permission.

The codebase is written in TypeScript (using React for rendering) and Sass for styling. It produces a single, static file that can be plainly read in your browser's inspection tools and even debugged with source maps, if you so desire.

This app is provided under the GPLv3 license, with assets covered under the Creative Commons CC-BY-SA license. Please feel free to do with this whatever your heart desires.

# Developing

### Requirements

Node.js 14.4.0 or higher
A bash shell (this has not been tested on WSL, but it will probably work fine)

### Building

The app is configured so that the `npm build` command does it all. This executes the build script provides in the `./script` directory.

### Testing

The app is configured so that `npm test` will run everything for you. It uses Jasmine with a near-default configuration and simple, hand-rolled mocks.

### Contributing

Nothing fancy, just fork and open a pull request. :+1: