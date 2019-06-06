import install from 'jasmine-es6';
install();
import * as constants from 'C:/Users/svish3/Desktop/via-coding/es6-tutorial-data-step2/js/constants';

describe("constant file value", () => {
    describe("check values", () => {
        it("should check limit!", () => {
            const limit = 15;
            expect(15).toEqual(constants.LIMIT);
        });
         it("should check url!", () => {
            const limit = 15;
            expect(constants.GIPHY_URLS.search).toContain('search');
        })
    })
})