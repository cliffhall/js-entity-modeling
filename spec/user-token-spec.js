/**
 * js-entity-modeling
 * Jasmine Test for Schema Entity: user_token
 *
 * @author Cliff Hall <cliff@futurescale.com>
 */
require('../domain');

describe( "A valid UserToken entity", () => {

    it( "can be created with minimal constructor inputs", () => {

        const UID = '1234';
        const DISPLAY = 'TestMan';

        let name_token = new NameToken(DISPLAY);
        let user_token = new UserToken(UID, name_token);

        expect( user_token ).not.toBeUndefined();
        expect( user_token.uid ).toBe( UID );
        expect( Object.getPrototypeOf( user_token.name ) ).toBe( NameToken.prototype );
        expect( user_token.name.isValid() ).toBe( true );
        expect( user_token.name.display ).toBe( DISPLAY );

    });

    it( "can be created with complete constructor inputs", () => {

        const UID = '1234';
        const DISPLAY = 'TestMan';
        const FIRST = 'Testy';
        const LAST = 'Tester';
        const PHOTO_URL = 'https://example.com/images/image.jpg';

        let NAME = new NameToken(DISPLAY, FIRST, LAST);
        let user_token = new UserToken(UID, NAME, PHOTO_URL);

        expect( user_token ).not.toBeUndefined();
        expect( user_token.uid ).toBe( UID );
        expect( Object.getPrototypeOf( user_token.name ) ).toBe( NameToken.prototype );
        expect( user_token.name.isValid() ).toBe( true );
        expect( user_token.name.display ).toBe( DISPLAY );
        expect( user_token.name.first ).toBe( FIRST );
        expect( user_token.name.last ).toBe( LAST );
        expect( user_token.photo_url ).toBe( PHOTO_URL );

    });

    it( "can be created with a plain object using fromObject()", () => {

        const UID = '1234';
        const DISPLAY = 'TestMan';
        const FIRST = 'Testy';
        const LAST = 'Tester';
        const PHOTO_URL = 'https://example.com/images/image.jpg';
        const INPUT = {
            uid: UID,
            name: {
                display: DISPLAY,
                first: FIRST,
                last: LAST
            },
            photo_url: PHOTO_URL
        };

        let user_token = UserToken.fromObject( INPUT );

        expect( user_token ).not.toBeUndefined();
        expect( user_token.uid ).toBe( UID );
        expect( Object.getPrototypeOf( user_token.name ) ).toBe( NameToken.prototype );
        expect( user_token.name.isValid() ).toBe( true );
        expect( user_token.name.display ).toBe( DISPLAY );
        expect( user_token.name.first ).toBe( FIRST );
        expect( user_token.name.last ).toBe( LAST );
        expect( user_token.photo_url ).toBe( PHOTO_URL );

    });

    it( "can be created with a plain object that was created using toObject()", () => {

        const UID = '1234';
        const DISPLAY = 'TestMan';
        const FIRST = 'Testy';
        const LAST = 'Tester';
        const PHOTO_URL = 'https://example.com/images/image.jpg';
        const NAME = new NameToken(DISPLAY, FIRST, LAST);

        let obj = new UserToken(UID, NAME, PHOTO_URL).toObject();
        let user_token = UserToken.fromObject( obj );

        expect( user_token ).not.toBeUndefined();
        expect( user_token.uid ).toBe( UID );
        expect( Object.getPrototypeOf( user_token.name ) ).toBe( NameToken.prototype );
        expect( user_token.name.isValid() ).toBe( true );
        expect( user_token.name.display ).toBe( DISPLAY );
        expect( user_token.name.first ).toBe( FIRST );
        expect( user_token.name.last ).toBe( LAST );
        expect( user_token.photo_url ).toBe( PHOTO_URL );

    });

    it( "isn't valid unless it has a uid and a display name", () => {

        const UID = '1234';
        const DISPLAY = 'TestMan';

        let name_token = new NameToken();
        let user_token = new UserToken();

        expect( user_token ).not.toBeUndefined();
        expect( user_token.isValid() ).toBe( false );

        user_token.name = name_token;
        expect( user_token.name.isValid() ).toBe( false );

        name_token.display = DISPLAY;
        expect( user_token.name.isValid() ).toBe( true );

        user_token.uid = UID;
        expect( user_token.isValid() ).toBe( true );

    });

});
