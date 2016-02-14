class HomeController {
  constructor() {
    this.message = 'Hello'
  }
  foo() {
    return 'world'
  }
}

HomeController.$inject = []

module.exports = HomeController
