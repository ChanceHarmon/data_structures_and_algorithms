'use strict';
const cheerio = require('cheerio');
const Mustache = require('mustache');
/*
--------------------------------------------------------------------------
The pokemon object below is the result of making an API call to the PokiApi.
In this task, you must render each Pokemon to the DOM
To accomplish this you will need the following functions:
1. renderPokemon
   - Runs the pokemon list of objects through a constructor function
   - Generates the markup needed to add each pokemon object to the DOM.
   - Adds each Pokemon to the <main>
2. Poki constructor function
   - This function will take the results of the API and make sure that they are all in the correct format.
Remember, in this test, $ is jQuery, just as it is in a normal web app
--------------------------------------------------------------------------
*/
let pokemon = {
  "count": 964,
  "next": "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20",
  "previous": null,
  "results": [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/"
    },
    {
      "name": "charmander",
      "url": "https://pokeapi.co/api/v2/pokemon/4/"
    },
    {
      "name": "charmeleon",
      "url": "https://pokeapi.co/api/v2/pokemon/5/"
    },
    {
      "name": "charizard",
      "url": "https://pokeapi.co/api/v2/pokemon/6/"
    },
    {
      "name": "squirtle",
      "url": "https://pokeapi.co/api/v2/pokemon/7/"
    },
    {
      "name": "wartortle",
      "url": "https://pokeapi.co/api/v2/pokemon/8/"
    },
    {
      "name": "blastoise",
      "url": "https://pokeapi.co/api/v2/pokemon/9/"
    },
    {
      "name": "caterpie",
      "url": "https://pokeapi.co/api/v2/pokemon/10/"
    },
    {
      "name": "metapod",
      "url": "https://pokeapi.co/api/v2/pokemon/11/"
    }
  ]
};
let $ = createSnippetWithJQuery(`
<script id="template" type="x-tmpl-mustache">
  <h2>{{ name }}</h2>
  <img src="{{ img_url }}" alt="{{ name }}" />
</script>
<main></main>
`);

//line 74 was originally missing

//$ = $.html().replace(/<\/body><\/html>/, '<main></main></body></html>')

const renderPokemon = () => {


  //console.log($)
  let template = $('#template').html();
  // template = template.concat('  <main></main>')  // //let main = $('<main></main>').text()
  // // //$('#template').appendTo(main);
  // console.log(template)
  pokemon.results.forEach(poke => {
    //console.log(template)
    let timmy = new Poki(poke)
    //   console.log(timmy)
    let f2d = Mustache.render(template, timmy);
    //console.log(f2d)
    //$('h2').append(f2d.name);
    // return f2d;
    $('main').append(f2d)
    // console.log(f2d)
    //console.log(template)
  })
}


//   let template = $('#template').html();
//   console.log(template)
//   let markup = Mustache.render(template,
//     {
//       'name': 'hello'
//     })

//   $('h2').append(markup)
//   console.log()

// }
function Poki(obj) {
  this.name = obj.name;
  this.img_url = obj.url;
}
///////////////////////////////////////////////////
// TESTS
//////////////////////////////////////////////////
describe('Testing challenge', () => {
  it('It should return html markup with the character', () => {
    renderPokemon()
    expect($('h2').eq(1).text()).toContain('ivysaur');
    expect($('img').eq(5).attr('src')).toContain(6);
  });
});
function createSnippetWithJQuery(html) {
  return cheerio.load(html);
};