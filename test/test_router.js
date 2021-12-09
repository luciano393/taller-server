const chai = require('chai');
const assert = chai.assert;
const router = require('../routes/index');

// Results
const newWorkResult = router.post('/API/works', { 'marca' : 'test', 'modelo': 'test', 'image': 'http://test.com' })

describe('Testing route newWork', function() {

    it('Success is a expected', function(){
        assert.equal(newWorkResult, 'Success')
    })
})