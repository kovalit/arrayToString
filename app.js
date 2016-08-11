    /* 
     * To change this license header, choose License Headers in Project Properties.
     * To change this template file, choose Tools | Templates
     * and open the template in the editor.
     */


    var array = [1,2,3,4,5,6,7,8];
       
    


    var toString = function(arr) {

   
        var lenght = arr.length;

        var range = [];
        var isFirst = true;
        var firstInt;

        for (var i = 0; i < lenght; i++) {

            if (isFirst) {
                    firstInt = arr[i];
                    isFirst = false;
            }

            var isLast = (arr[i+1]-arr[i]) > 1 || i === (lenght - 1);
            if (isLast) {
                    isFirst = true;
                    range.push(firstInt + '-' + arr[i]);
                }

        }

         console.log(range);  

    }

    toString(array);