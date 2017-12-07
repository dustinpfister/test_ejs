var ejs = require('ejs');
 
// the renderFile method in action
ejs.renderFile(
 
    // first I give it a path to an *.ejs file
    'ejs/first.ejs', 
 
    // the some data to use when rendering
    {
 
        title: 'reading a file in ejs!',
        numbers: [7, 8, 9]
 
    },
 
    // callback with html, or an error
    function (err, html) {
 
        if (err) {
 
            // reject if an error happens
            console.log(err);
 
        }
 
        //resolve with the html
        console.log(html);
 
    }
 
);
