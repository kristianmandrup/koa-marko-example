let bluebird  = require('bluebird'),

// Loads a given resource
function load(resource, delay) {
  // simulate delay of calling API and retrieving real data :)
  return bluebird.delay(delay).then(function(){
    // load JSON from fixture file
    // TODO: fixture path should be configurable!
    return require(`../test/fixtures/${resource}.json`);
  });  
}

// Retrieves a resource
// In real app will load JSON via HTTP GET
function retriever(resource, delay){
  return function () {
    return load(resource, 1500).then(function(data){
      return data;
    });    
  }
}

// Data sources available
// TODO: generalize pattern ;)
var store = {
  shoppingCart: retriever('shoppingCart', 1500),
  ads: retriever('ads', 3000),
};

export default {
  index: {
    shoppingCart: store.shoppingCart
  },
  prematch: {
    ads: store.ads,
    shoppingCart: store.shoppingCart
  },
  live: {
    ads: store.ads,
    shoppingCart: store.shoppingCart
  },
  casino: {
    ads: store.ads,
    shoppingCart: store.shoppingCart
  }
}