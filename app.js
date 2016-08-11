    /* 
     * To change this license header, choose License Headers in Project Properties.
     * To change this template file, choose Tools | Templates
     * and open the template in the editor.
     */


    var array = [1,3,4,5,6,7,8,10,11,12] ;
       
    var isArray = function (arr) {
            var toString = {}.toString;
            return toString.call(arr) == '[object Array]';
    };


    var toString = function(arr) {

        if (!isArray(arr)){
                return false;
        }
        
        var lenght = arr.length;

        var range = [];
        var isFirst = true;
        var firstInt;

        for (var i = 0; i < lenght; i++) {

            if (isFirst) {
                    firstInt = arr[i];
                    isFirst = false;
            }
            
            
            var isLast = (i === (lenght - 1));
            if (!isLast) {
                isLast = (arr[i+1] - arr[i]) > 1;
            }

            if (isLast) {
                    isFirst = true;
                    
                    if (firstInt === arr[i]) {
                            range.push(firstInt);
                    }
                    else if (arr[i] - firstInt === 1){
                            range.push(firstInt);
                            range.push(arr[i]);
                    }
                    else {
                            range.push(firstInt + '-' + arr[i]);
                    }

            }

        }

        var str = range.join(',');  
        
        console.log(str);

    }

    toString(array);