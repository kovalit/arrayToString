    var ArrayToRangeString = require('./index');
    
    var array = '[1,2,3,4,5,6,8]';
    
    
    ArrayToRangeString.convert(array, function(err, value){
        if (err) throw err;
        console.log(value);
    })
