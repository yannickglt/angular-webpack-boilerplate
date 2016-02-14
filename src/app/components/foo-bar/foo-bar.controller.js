class FooBarController {
  constructor() {
    console.log('foobar');
  }
  bar() {
    return 'bar'
  }
}

FooBarController.$inject = []

module.exports = FooBarController
