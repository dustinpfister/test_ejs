var ejs = require('ejs'),

html = ejs.render('<p> hello <%= name %> </p>', {name: 'ejs'});

console.log(html); // <p> hello ejs </p>
