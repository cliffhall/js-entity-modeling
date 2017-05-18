/**
 * js-entity-modeling
 * Domain Entities
 *
 * Supports usage in both Node.js and browser contexts.
 *
 * @author Cliff Hall <cliff@futurescale.com>
 */
(function() {

    const NODE = (typeof module !== 'undefined' && typeof global !== 'undefined');

    if (NODE) { // In Node, add the constructors to global

        global.Location = require('./entity/location');
        global.NameToken = require('./entity/name-token');
        global.User = require('./entity/user');
        global.UserToken = require('./entity/user-token');

    } else if (document) {  // In browser, load files with script tags in document.head

        var domain = [
            './entity/location.js',
            './entity/name-token.js',
            './entity/user.js',
            './entity/user-token.js'
        ];

        domain.forEach( (filename) => {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = filename;
            document.getElementsByTagName('head')[0].appendChild(script);
        });

    }

})();

