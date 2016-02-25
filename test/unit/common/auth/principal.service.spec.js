'use strict';

describe('principal', function () {
    beforeEach(module('app'));

    it('can get an instance of principal factory', inject(function(principal) {
        expect(principal).toBeDefined();
    }));
});
