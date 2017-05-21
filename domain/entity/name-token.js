/**
 * js-entity-modeling
 * Schema Entity: name_token
 *
 * @author Cliff Hall <cliff@futurescale.com>
 */
(function() {

    // Support Node and browser with selective export to modules or window
    var NameToken = (function() {

        /**
         * Constructor
         * @param display
         * @param first
         * @param last
         * @constructor
         */
        function NameToken(display, first, last) {
            this.first = first;
            this.last = last;
            this.display = display;
        };

        /**
         * Get a new NameToken instance from a database representation
         * @param o
         * @returns {NameToken}
         */
        NameToken.fromObject = function(o) {
            return new NameToken(o.display, o.first, o.last);
        };

        /**
         * Get a database representation of this NameToken instance
         * @returns {object}
         */
        NameToken.prototype.toObject = function(){
            return JSON.parse(JSON.stringify(this));
        };

        /**
         * Get a string representation of this NameToken instance
         * @returns {string}
         */
        NameToken.prototype.toString = function() {
            return this.last + ", " + this.last + " AKA " + this.display;
        };

        /**
         * Is this NameToken instance valid?
         * @returns {boolean|*}
         */
        NameToken.prototype.isValid = function() {
            var retval = false;
            try {
                retval = (
                    this.display !== null &&
                    typeof this.display !== 'undefined' &&
                    typeof this.display === 'string'
                );
            } catch (e) {}
            return retval;
        };

        return NameToken;

    })();

    // Export
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = NameToken;
    } else {
        window.NameToken = NameToken;
    }

})();