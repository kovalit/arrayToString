    
    var assert = require("assert");
 
 
    var ArrayToRangeString = require('../index');
    
    var array = [1,2,3,4,5,6,7,8];
    
    var ex = function(err, value) {
        assert.equal(value, '1-8');
    }
      
    describe('User#save()', function(){
        it('should save without error', function(done){
            ArrayToRangeString.convert(array, ex);
            done();
        })
    })


