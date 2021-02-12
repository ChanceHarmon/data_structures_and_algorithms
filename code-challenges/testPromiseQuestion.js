'use strict';

const superagent = require('superagent');

function getCharacters() {
  let swampi = {};
  superagent.get('https://swapi.dev/api/people')
    .then(data => {
      data.body.results.forEach(person => {
        swampi[person.name] = person.url;
      })
      //console.log(swampi)
      return swampi;
    }).catch(err => {
      console.error(err)
    })
}
getCharacters();
