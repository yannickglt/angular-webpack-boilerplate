import components from '../components'
import FooBarController from './foo-bar.controller'
import FooBarTemplate from './foo-bar.template.html'

components
  .component('fooBar', {
    bindings: {
      comment: '@'
    },
    controller: FooBarController,
    template: FooBarTemplate
  })
