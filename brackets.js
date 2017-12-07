var ejs = require('ejs');

var htmlString = '<p>Yes this is some html</p>';

// escaped
console.log(ejs.render('<%=  \'' + htmlString + '\' %>'));
// &lt;p&gt;Yes this is some html&lt;/p&gt;


// Unescaped
console.log(ejs.render('<%-  \'' + htmlString + '\' %>'));
// <p>Yes this is some html</p>