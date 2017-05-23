/**
 * js-entity-modeling
 * Schema Entity: user
 *
 * @author Cliff Hall <cliff@futurescale.com>
 */
(function() {

    // Support Node and browser with selective export to modules or window
    var User = (function() {

        /**
         * Constructor
         * @param uid
         * @param email
         * @param display
         * @param first
         * @param last
         * @param photo_url
         * @param address
         * @constructor
         */
        function User(uid, email, display, first, last, photo_url, address) {
            this.uid = uid;
            this.email = email;
            this.name = new NameToken(display, first, last);
            this.photo_url = photo_url;
            this.address = address; /* Location instance */
        };

        /**
         * Get a new User instance from a database representation
         * @param o
         * @returns {User}
         */
        User.fromObject = function(o) {
            var address = (o.address) ? new Location.fromObject(o.address) : null;
            return new User(o.uid, o.email, o.name.display, o.name.first, o.name.last, o.photo_url, address);
        };

        /**
         * Get a database representation of this User instance
         * @returns {object}
         */
        User.prototype.toObject = function(){
            return JSON.parse(JSON.stringify(this));
        };

        /**
         * Get a string representation of this User instance
         * @returns {boolean}
         */
        User.prototype.toString = function() {
            return [
                this.uid,
                this.email,
                this.name.toString(),
                this.address ? this.address.toString() : "",
                this.photo_url ? this.photo_url : ""
            ].join(', ');
        };

        /**
         * Get a UserToken instance referring to this User
         * @returns {UserToken}
         */
        User.prototype.getToken = function() {
            return new UserToken( this.uid, this.name, this.photo_url );
        };

        /**
         * Is this User instance valid?
         * @returns {boolean}
         */
        User.prototype.isValid = function() {
            var retval = false;
            try {
                retval = (
                    typeof this.uid !== 'undefined' && this.uid !== null &&
                    typeof this.email !== 'undefined' && this.email !== null &&
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email) &&
                    typeof this.name  !== 'undefined' && this.name !== null &&
                    Object.getPrototypeOf( this.name ) === NameToken.prototype &&
                    this.name.isValid()
                );
            } catch (e) {}
            return retval;
        };

        return User;

    })();

    // Export
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = User;
    } else {
        window.User = User;
    }

})();