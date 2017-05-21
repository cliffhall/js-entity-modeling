"use strict";

require('../domain');

describe( "A valid User entity", () => {

    it( "can be created with minimal constructor inputs", () => {

        const UID = '1234';
        const EMAIL = 'test@example.com';
        const DISPLAY = 'TestMan';

        let user = new User(UID, EMAIL, DISPLAY);

        expect( user ).not.toBeUndefined();
        expect( user.uid ).toBe( UID );
        expect( user.email ).toBe( EMAIL );
        expect( Object.getPrototypeOf( user.name ) ).toBe( NameToken.prototype );
        expect( user.name.isValid() ).toBe( true );
        expect( user.name ).not.toBeUndefined();
        expect( user.name.display ).toBe( DISPLAY );
        expect( user.isValid() ).toBe( true );

    });

    it( "can be created with complete constructor inputs", () => {

        const UID = '1234';
        const EMAIL = 'test@example.com';
        const DISPLAY = 'TestMan';
        const FIRST = 'Testy';
        const LAST = 'Tester';
        const PHOTO_URL = 'https://example.com/images/image.jpg';
        const BUDGET = 25.00;
        const ADDRESS = new Location(
            "214 Royal St",
            "New Orleans",
            "LA",
            "70130",
            "United States",
            29.954163,
            -90.0702177,
            "French Quarter"
        );

        let user = new User( UID, EMAIL, DISPLAY, FIRST, LAST, PHOTO_URL, ADDRESS, BUDGET );

        expect( user ).not.toBeUndefined();
        expect( user.uid ).toBe( UID );
        expect( user.email ).toBe( EMAIL );
        expect( user.name ).not.toBeUndefined();
        expect( Object.getPrototypeOf( user.name ) ).toBe( NameToken.prototype );
        expect( user.name.isValid() ).toBe( true );
        expect( user.name.first ).toBe( FIRST );
        expect( user.name.last ).toBe( LAST );
        expect( user.name.display ).toBe( DISPLAY );
        expect( user.photo_url ).toBe( PHOTO_URL );
        expect( user.address ).not.toBeUndefined();
        expect( user.address.address ).toBe( ADDRESS.address );
        expect( user.address.city ).toBe( ADDRESS.city );
        expect( user.address.state ).toBe( ADDRESS.state );
        expect( user.address.postcode ).toBe( ADDRESS.postcode );
        expect( user.address.country ).toBe( ADDRESS.country );
        expect( user.address.latitude ).toBe( ADDRESS.latitude );
        expect( user.address.longitude ).toBe( ADDRESS.longitude );
        expect( user.address.neighborhood ).toBe( ADDRESS.neighborhood );
        expect( Object.getPrototypeOf( user.address ) ).toBe( Location.prototype );
        expect( user.address.isValid() ).toBe( true );
        expect( user.isValid() ).toBe( true );

    });

    it( "can be created with a plain object using fromObject()", () => {

        const UID = '1234';
        const EMAIL = 'test@example.com';
        const DISPLAY = 'TestMan';
        const FIRST = 'Testy';
        const LAST = 'Tester';
        const PHOTO_URL = 'https://example.com/images/image.jpg';
        const BUDGET = 25.00;
        const ADDRESS = {
            address: "214 Royal St",
            city: "New Orleans",
            state: "LA",
            postcode: "70130",
            country: "United States",
            latitude: 29.954163,
            longitude: -90.0702177,
            neighborhood: "French Quarter"
        };

        const INPUT = {
            uid: UID,
            email: EMAIL,
            name: {
                display: DISPLAY,
                first: FIRST,
                last: LAST
            },
            photo_url: PHOTO_URL,
            address: ADDRESS
        };

        let user = User.fromObject( INPUT );

        expect( user ).not.toBeUndefined();
        expect( user.uid ).toBe( UID );
        expect( user.email ).toBe( EMAIL );
        expect( user.name ).not.toBeUndefined();
        expect( Object.getPrototypeOf( user.name ) ).toBe( NameToken.prototype );
        expect( user.name.isValid() ).toBe( true );
        expect( user.name.first ).toBe( FIRST );
        expect( user.name.last ).toBe( LAST );
        expect( user.photo_url ).toBe( PHOTO_URL );
        expect( user.address ).not.toBeUndefined();
        expect( Object.getPrototypeOf( user.address ) ).toBe( Location.prototype );
        expect( user.address.isValid() ).toBe( true );
        expect( user.address.address ).toBe( ADDRESS.address );
        expect( user.address.city ).toBe( ADDRESS.city );
        expect( user.address.state ).toBe( ADDRESS.state );
        expect( user.address.postcode ).toBe( ADDRESS.postcode );
        expect( user.address.country ).toBe( ADDRESS.country );
        expect( user.address.latitude ).toBe( ADDRESS.latitude );
        expect( user.address.longitude ).toBe( ADDRESS.longitude );
        expect( user.address.neighborhood ).toBe( ADDRESS.neighborhood );
        expect( user.isValid() ).toBe( true );

    });

    it( "can be created with a plain object that was created using toObject()", () => {

        const UID = '1234';
        const EMAIL = 'test@example.com';
        const DISPLAY = 'TestMan';
        const FIRST = 'Testy';
        const LAST = 'Tester';
        const PHOTO_URL = 'https://example.com/images/image.jpg';
        const BUDGET = 25.00;
        const ADDRESS = new Location(
            "214 Royal St",
            "New Orleans",
            "LA",
            "70130",
            "United States",
            29.954163,
            -90.0702177,
            "French Quarter"
        );

        let obj = new User(  UID, EMAIL, DISPLAY, FIRST, LAST, PHOTO_URL, ADDRESS, BUDGET ).toObject();
        let user = User.fromObject( obj );

        expect( user ).not.toBeUndefined();
        expect( user.uid ).toBe( UID );
        expect( user.email ).toBe( EMAIL );
        expect( user.name ).not.toBeUndefined();
        expect( Object.getPrototypeOf( user.name ) ).toBe( NameToken.prototype );
        expect( user.name.isValid() ).toBe( true );
        expect( user.name.first ).toBe( FIRST );
        expect( user.name.last ).toBe( LAST );
        expect( user.name.display ).toBe( DISPLAY );
        expect( user.photo_url ).toBe( PHOTO_URL );
        expect( user.address ).not.toBeUndefined();
        expect( user.address.address ).toBe( ADDRESS.address );
        expect( user.address.city ).toBe( ADDRESS.city );
        expect( user.address.state ).toBe( ADDRESS.state );
        expect( user.address.postcode ).toBe( ADDRESS.postcode );
        expect( user.address.country ).toBe( ADDRESS.country );
        expect( user.address.latitude ).toBe( ADDRESS.latitude );
        expect( user.address.longitude ).toBe( ADDRESS.longitude );
        expect( user.address.neighborhood ).toBe( ADDRESS.neighborhood );
        expect( Object.getPrototypeOf( user.address ) ).toBe( Location.prototype );
        expect( user.address.isValid() ).toBe( true );
        expect( user.isValid() ).toBe( true );

    });

    it( "isn't valid unless it has a uid, email, and a display name", () => {

        const UID = '1234';
        const EMAIL = 'test@example.com';
        const DISPLAY = 'TestMan';

        let user = new User();

        expect( user ).not.toBeUndefined();
        expect( user.uid ).toBeUndefined();
        expect( user.email ).toBeUndefined();
        expect( Object.getPrototypeOf( user.name ) ).toBe( NameToken.prototype );
        expect( user.name ).not.toBeUndefined();
        expect( user.name.display ).toBeUndefined();
        expect( user.name.isValid() ).toBe( false );
        expect( user.isValid() ).toBe( false );

        user.uid = UID;
        expect( user.isValid() ).toBe( false );

        user.email = EMAIL;
        expect( user.isValid() ).toBe( false );

        user.name.display = DISPLAY;
        expect( user.isValid() ).toBe( true );

    });

    it( "can generate a valid UserToken to represent the user in other contexts", () => {

        const UID = '1234';
        const EMAIL = 'test@example.com';
        const DISPLAY = 'TestMan';
        const FIRST = 'Testy';
        const LAST = 'Tester';
        const PHOTO_URL = 'https://example.com/images/image.jpg';

        let user = new User( UID, EMAIL, DISPLAY, FIRST, LAST, PHOTO_URL );
        let token = user.getToken();

        expect( token ).not.toBeUndefined();
        expect( Object.getPrototypeOf( token ) ).toBe( UserToken.prototype );
        expect( token.isValid() ).toBe( true );
        expect( token.uid ).toBe( UID );
        expect( token.photo_url ).toBe( PHOTO_URL );
        expect( Object.getPrototypeOf( token.name ) ).toBe( NameToken.prototype );
        expect( token.name.isValid() ).toBe( true );
        expect( token.name.first ).toBe( FIRST );
        expect( token.name.last ).toBe( LAST );
        expect( token.name.display ).toBe( DISPLAY );

    });

});
