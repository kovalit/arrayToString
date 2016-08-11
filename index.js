
    var ArrayToRangeString = {
         
        isArray : function (arr) {
                var toString = {}.toString;
                return toString.call(arr) === '[object Array]';
        },

        convert: function(arr, callback) {

            if (!this.isArray(arr)){
                    var err = 'Array in not valid';
                    return callback(err);
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

            return callback(null, str);

        }
    };
    
    module.exports = ArrayToRangeString;

