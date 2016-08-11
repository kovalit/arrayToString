    var ArrayToRangeString = require('./index');
    
    var  arr = [1,2,3,4,5,6,7,8];
    
    ArrayToRangeString.convert(arr, function(err, value){
        if (err) throw err;
        console.log(value);
    })
    
    
