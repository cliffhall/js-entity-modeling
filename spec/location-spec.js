/**
 * js-entity-modeling
 * Jasmine Test for Schema Entity: location
 *
 * @author Cliff Hall <cliff@futurescale.com>
 */
require('../domain');

describe( "A valid Location entity", () => {

    it( "can be created with minimal constructor inputs", () => {

        const ADDRESS = '214 Royal St';
        const CITY = 'New Orleans';
        const STATE = 'LA';
        const POSTCODE = '70130';
        const COUNTRY = 'United States';

        let location = new Location(ADDRESS, CITY, STATE, POSTCODE, COUNTRY);

        expect( location ).not.toBeUndefined();
        expect( location.address ).toBe( ADDRESS );
        expect( location.city ).toBe( CITY );
        expect( location.state ).toBe( STATE );
        expect( location.postcode ).toBe( POSTCODE );
        expect( location.country ).toBe( COUNTRY );
        expect( location.isValid() ).toBe( true );

    });

    it( "can be created with complete constructor inputs", () => {

        const ADDRESS = '214 Royal St';
        const CITY = 'New Orleans';
        const STATE = 'LA';
        const POSTCODE = '70130';
        const COUNTRY = 'United States';
        const LATITUDE =  29.954163;
        const LONGITUDE = -90.0702177;
        const NEIGHBORHOOD = 'French Quarter';

        let location = new Location(ADDRESS, CITY, STATE, POSTCODE, COUNTRY, LATITUDE, LONGITUDE, NEIGHBORHOOD);

        expect( location ).not.toBeUndefined();
        expect( location.address ).toBe( ADDRESS );
        expect( location.city ).toBe( CITY );
        expect( location.state ).toBe( STATE );
        expect( location.postcode ).toBe( POSTCODE );
        expect( location.country ).toBe( COUNTRY );
        expect( location.latitude ).toBe( LATITUDE );
        expect( location.longitude ).toBe( LONGITUDE );
        expect( location.neighborhood ).toBe( NEIGHBORHOOD );
        expect( location.isValid() ).toBe( true );

    });

    it( "can be created with a plain object using fromObject()", () => {

        const ADDRESS = '214 Royal St';
        const CITY = 'New Orleans';
        const STATE = 'LA';
        const POSTCODE = '70130';
        const COUNTRY = 'United States';
        const LATITUDE =  29.954163;
        const LONGITUDE = -90.0702177;
        const NEIGHBORHOOD = 'French Quarter';
        const INPUT = {
            address: ADDRESS,
            city: CITY,
            state: STATE,
            postcode: POSTCODE,
            country: COUNTRY,
            latitude: LATITUDE,
            longitude: LONGITUDE,
            neighborhood: NEIGHBORHOOD
        };

        let location = Location.fromObject( INPUT );

        expect( location ).not.toBeUndefined();
        expect( location.address ).toBe( ADDRESS );
        expect( location.city ).toBe( CITY );
        expect( location.state ).toBe( STATE );
        expect( location.postcode ).toBe( POSTCODE );
        expect( location.country ).toBe( COUNTRY );
        expect( location.latitude ).toBe( LATITUDE );
        expect( location.longitude ).toBe( LONGITUDE );
        expect( location.neighborhood ).toBe( NEIGHBORHOOD );
        expect( location.isValid() ).toBe( true );

    });

    it( "can be created with a plain object that was created using toObject()", () => {

        const ADDRESS = '214 Royal St';
        const CITY = 'New Orleans';
        const STATE = 'LA';
        const POSTCODE = '70130';
        const COUNTRY = 'United States';
        const LATITUDE =  29.954163;
        const LONGITUDE = -90.0702177;
        const NEIGHBORHOOD = 'French Quarter';

        let obj = new Location(ADDRESS, CITY, STATE, POSTCODE, COUNTRY, LATITUDE, LONGITUDE, NEIGHBORHOOD).toObject();
        let location = Location.fromObject( obj );

        expect( location ).not.toBeUndefined();
        expect( location.address ).toBe( ADDRESS );
        expect( location.city ).toBe( CITY );
        expect( location.state ).toBe( STATE );
        expect( location.postcode ).toBe( POSTCODE );
        expect( location.country ).toBe( COUNTRY );
        expect( location.latitude ).toBe( LATITUDE );
        expect( location.longitude ).toBe( LONGITUDE );
        expect( location.neighborhood ).toBe( NEIGHBORHOOD );
        expect( location.isValid() ).toBe( true );

    });

    it( "isn't valid unless it has an address, city, state, postcode, and country", () => {

        const ADDRESS = '214 Royal St';
        const CITY = 'New Orleans';
        const STATE = 'LA';
        const POSTCODE = '70130';
        const COUNTRY = 'United States';

        let location = new Location();
        expect( location ).not.toBeUndefined();
        expect( location.isValid() ).toBe( false );


        location.address = ADDRESS;
        expect( location.isValid() ).toBe( false );

        location.city = CITY;
        expect( location.isValid() ).toBe( false );

        location.state = STATE;
        expect( location.isValid() ).toBe( false );

        location.postcode = POSTCODE;
        expect( location.isValid() ).toBe( false );

        location.country = COUNTRY;
        expect( location.isValid() ).toBe( true );

    });

});
