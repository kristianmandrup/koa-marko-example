let marko     = require('marko');

function findTemplate(template, data) {
  return `./views/${template}.marko`
}

export default function(template, data) {
  this.body = marko.load(findTemplate(template)).stream(data);
  this.type = 'text/html';  
}