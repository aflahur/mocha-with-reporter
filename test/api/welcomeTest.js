const assert = require('chai').assert;
const app = require('../../assert')
//Asserting
//cara assdert menggunakan chai
describe('Welcome test', function () {
    it('app sould retrun welcome message', function () {
        assert.equal(app(), "Welcome")
    })
})