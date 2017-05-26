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
    const path = './entity/';
    const entities = [
        {name: 'Location', file:'location'},
        {name: 'NameToken', file:'name-token'},
        {name: 'User', file:'user'},
        {name: 'UserToken', file:'user-token'}
    ];

    if (NODE) { // In Node, add the constructors to global

        entities.forEach( (entity) => global[entity.name] = require(path + entity.file) );

    } else if (document) {  // In browser, load files with script tags in document.head

        entities.forEach( (entity) => {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = path + entity.file + ".js";
            document.getElementsByTagName('head')[0].appendChild(script);
        });

    }

})();

