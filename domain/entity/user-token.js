/**
 * js-entity-modeling
 * Schema Entity: user_token
 *
 * @author Cliff Hall <cliff@futurescale.com>
 */
(function() {

    // Support Node and browser with selective export to modules or window
    var UserToken = (function() {

        /**
         * Constructor
         * @param uid
         * @param name
         * @param photo_url
         * @constructor
         */
        function UserToken(uid, name, photo_url) {
            this.uid = uid;
            this.name = name; /* NameToken instance */
            this.photo_url = photo_url;
        };

        /**
         * Get a new UserToken instance from a database representation
         * @param o
         * @returns {UserToken}
         */
        UserToken.fromObject = function(o) {
            var name = new NameToken(o.name.display, o.name.first, o.name.last);
            return new UserToken(o.uid, name, o.photo_url);
        };

        /**
         * Get a database representation of this UserToken instance
         * @returns {object}
         */
        UserToken.prototype.toObject = function(){
            return JSON.parse(JSON.stringify(this));
        };

        /**
         * Get a string representation of this UserToken instance
         * @returns {string}
         */
        UserToken.prototype.toString = function() {
            return [
                this.uid,
                this.name.toString(),
                this.photo_url
            ].join(", ");
        };

        /**
         * Is this UserToken instance's uid field valid?
         * @returns {boolean}
         */
        UserToken.prototype.uidIsValid = function() {
            var valid = false;
            try {
                valid = (
                    typeof this.uid !== 'undefined' &&
                    this.uid !== null
                );
            } catch (e) {}
            return valid;
        };

        /**
         * Is this UserToken instance's name field valid?
         * @returns {boolean}
         */
        UserToken.prototype.nameIsValid = function() {
            var valid = false;
            try {
                valid = (
                    typeof this.name  !== 'undefined' && this.name !== null &&
                    Object.getPrototypeOf(this.name) === NameToken.prototype &&
                    this.name.isValid()
                );
            } catch (e) {}
            return valid;
        };

        /**
         * Is this UserToken instance valid?
         * @returns {boolean|*}
         */
        UserToken.prototype.isValid = function() {
            return (
                this.uidIsValid() &&
                this.nameIsValid()
            );
        };

        return UserToken;

    })();

    // Export
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = UserToken;
    } else {
        window.UserToken = UserToken;
    }

})();