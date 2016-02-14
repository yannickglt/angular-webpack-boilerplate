import angular from 'angular';
import uiRouter from 'angular-ui-router'
import HomeController from './home.controller'
import HomeTemplate from './home.template.html'

// Directives
import FooBar from '../../components/foo-bar/foo-bar.component'

angular
  .module('app.home', [
    'ui.router'
  ])
  .config(($stateProvider) => {
    $stateProvider
      .state('home', {
        url: '/home',
        views: {
          app: {
            template: HomeTemplate,
            controller: HomeController,
            controllerAs: 'home'
          }
        }
      })
  })
