declare module Meteor {
    function npmRequire(name: string);
    function bindEnvironment(asyncCallback: Function);
}
