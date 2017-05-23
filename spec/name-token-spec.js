/**
 * js-entity-modeling
 * Jasmine Test for Schema Entity: name_token
 *
 * @author Cliff Hall <cliff@futurescale.com>
 */
require('../domain');

describe( "A valid NameToken entity", () => {

    it( "can be created with minimal constructor inputs", () => {

        const DISPLAY = 'TestMan';

        let name_token = new NameToken(DISPLAY);

        expect( name_token ).not.toBeUndefined();
        expect( name_token.display ).toBe( DISPLAY );
        expect( name_token.isValid() ).toBe( true );

    });

    it( "can be created with complete constructor inputs", () => {

        const DISPLAY = 'TestMan';
        const FIRST = 'Testy';
        const LAST = 'Tester';

        let name_token = new NameToken(DISPLAY, FIRST, LAST);

        expect( name_token ).not.toBeUndefined();
        expect( name_token.display ).toBe( DISPLAY );
        expect( name_token.first ).toBe( FIRST );
        expect( name_token.last ).toBe( LAST );
        expect( name_token.isValid() ).toBe( true );

    });

    it( "can be created with a plain object using fromObject()", () => {

        const DISPLAY = 'TestMan';
        const FIRST = 'Testy';
        const LAST = 'Tester';
        const INPUT = {
            display: DISPLAY,
            first: FIRST,
            last: LAST
        };

        let name_token = NameToken.fromObject( INPUT );

        expect( name_token ).not.toBeUndefined();
        expect( name_token.display ).toBe( DISPLAY );
        expect( name_token.first ).toBe( FIRST );
        expect( name_token.last ).toBe( LAST );
        expect( name_token.isValid() ).toBe( true );

    });

    it( "can be created with a plain object that was created using toObject()", () => {

        const DISPLAY = 'TestMan';
        const FIRST = 'Testy';
        const LAST = 'Tester';

        let obj = new NameToken(DISPLAY, FIRST, LAST).toObject();
        let name_token = NameToken.fromObject( obj );

        expect( name_token ).not.toBeUndefined();
        expect( name_token.display ).toBe( DISPLAY );
        expect( name_token.first ).toBe( FIRST );
        expect( name_token.last ).toBe( LAST );
        expect( name_token.isValid() ).toBe( true );

    });

    it( "isn't valid unless it has a uid and a display name", () => {

        const DISPLAY = 'TestMan';

        let name_token = new NameToken();

        expect( name_token ).not.toBeUndefined();
        expect( name_token.isValid() ).toBe( false );

        name_token.display = DISPLAY;
        expect( name_token.isValid() ).toBe( true );


    });

});
