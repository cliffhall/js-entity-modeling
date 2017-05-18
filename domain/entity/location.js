/**
 * js-entity-modeling
 * Schema Entity: location
 *
 * @author Cliff Hall <cliff@futurescale.com>
 */
(function() {

    // Support Node and browser with selective export to modules or window
    var Location = (function() {

        /**
         * Constructor
         * @param address
         * @param city
         * @param state
         * @param postcode
         * @param country
         * @param latitude
         * @param longitude
         * @param neighborhood
         * @constructor
         */
        function Location(address, city, state, postcode, country, latitude, longitude, neighborhood){
            this.address = address;
            this.city = city;
            this.state = state;
            this.postcode = postcode;
            this.country = country;
            this.latitude = latitude;
            this.longitude = longitude;
            this.neighborhood = neighborhood;
        };

        /**
         * Get a new Location instance from a database representation
         * @param o
         * @returns {Location}
         */
        Location.fromObject = function(o) {
            return new Location(o.address, o.city, o.state, o.postcode, o.country, o.latitude, o.longitude, o.neighborhood);
        };

        /**
         * Get a database representation of this Location instance
         * @returns {object}
         */
        Location.prototype.toObject = function(){
            return JSON.parse(JSON.stringify(this));
        };

        /**
         * Get a string representation of this Location instance
         * @returns {boolean}
         */
        Location.prototype.toString = function() {
            return [
                this.address,
                this.city,
                this.state,
                this.postcode,
                this.country,
                this.latitude,
                this.longitude,
                this.neighborhood
            ].join(', ');
        };

        /**
         * Is this Location instance valid?
         * @returns {boolean}
         */
        Location.prototype.isValid = function() {
            var retval = false;
            try {
                retval = (
                    typeof this.address !== 'undefined' &&
                    typeof this.city !== 'undefined' &&
                    typeof this.state !== 'undefined' &&
                    typeof this.postcode !== 'undefined' &&
                    typeof this.country !== 'undefined'
                );
            } catch (e) {}
            return retval;
        };

        return Location;

    })();

    // Export
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = Location;
    } else {
        window.Location = Location;
    }

})();