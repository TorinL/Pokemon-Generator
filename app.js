(function() {
  'use strict';

  angular.module('app', [])
    .component('pokemon', {
      controller: controller,
      template: `
        <div class="container">
          <form>
          <h1>Generate a Pokemon!</h1>
          <button ng-click="$ctrl.generatePokemon()">Click me</button>
          </form>
         <div>
         <p>A wild {{$ctrl.poke.name}} appeared!</p>
          <img ng-show="$ctrl.poke.name" ng-src="{{$ctrl.poke.sprites.front_default}}">
         </div>
        </div>
      `
    })

      controller.$inject = ['$http']
      function controller($http){
        const vm = this
         vm.generatePokemon = generatePokemon;

      function generatePokemon() {
        const rand = Math.ceil(Math.random() * 722)
       $http.get(`http://pokeapi.co/api/v2/pokemon/${rand}`).then(function (response){
         vm.poke = response.data
       })
       }
      }

})();
