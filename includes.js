var ejs = require('ejs'),

// a readEJS method
readEJS = function (fn, data) {

    // default to an empty object if no data is given
    data = data || {};

    // using a promise
    return new Promise(function (resolve, reject) {

        if (!fn) {

            // reject if a filename is not given
            reject(new Error('no ejs file given.'));

        }

        // the renderFile method in action
        ejs.renderFile(fn, data, function (err, html) {

            if (err) {

                // reject if an error happens
                reject(err);

            }

            //resolve with the html
            resolve(html);

        });

    });

};

// read an EJS file.
readEJS('ejs/layout.ejs', 

// data to be used in my ejs files
{

    title: 'EJS powered site!',
    sections: [

        'home',
        'blog',
        'about'

    ]

}).then(function (html) {

    console.log(html); // logs the html

}).catch (function (err) {

    console.log(err); // logs an error if it hapens

});
