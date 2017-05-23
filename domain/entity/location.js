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
         * Is this Location instance's address field valid?
         * @returns {boolean}
         */
        Location.prototype.addressIsValid = function() {
            var valid = false;
            try {
                valid = (
                    typeof this.address !== 'undefined' &&
                    this.address != null
                );
            } catch (e) {}
            return valid;
        };

        /**
         * Is this Location instance's city field valid?
         * @returns {boolean}
         */
        Location.prototype.cityIsValid = function() {
            var valid = false;
            try {
                valid = (
                    typeof this.city !== 'undefined' &&
                    this.city != null
                );
            } catch (e) {}
            return valid;
        };

        /**
         * Is this Location instance's state field valid?
         * @returns {boolean}
         */
        Location.prototype.stateIsValid = function() {
            var valid = false;
            try {
                valid = (
                    typeof this.state !== 'undefined' &&
                    this.state != null
                );
            } catch (e) {}
            return valid;
        };

        /**
         * Is this Location instance's postcode field valid?
         * @returns {boolean}
         */
        Location.prototype.postcodeIsValid = function() {
            var valid = false;
            try {
                valid = (
                    typeof this.postcode !== 'undefined' &&
                    this.postcode != null
                );
            } catch (e) {}
            return valid;
        };

        /**
         * Is this Location instance's postcode field valid?
         * @returns {boolean}
         */
        Location.prototype.countryIsValid = function() {
            var valid = false;
            try {
                valid = (
                    typeof this.country !== 'undefined' &&
                    this.country != null
                );
            } catch (e) {}
            return valid;
        };

        /**
         * Is this Location instance valid?
         * @returns {boolean}
         */
        Location.prototype.isValid = function() {
            return (
                this.addressIsValid() &&
                this.cityIsValid() &&
                this.stateIsValid() &&
                this.postcodeIsValid() &&
                this.countryIsValid()
            );
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