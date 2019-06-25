function EightQueens(strArr) { 

    let primera = null;
    let matches = strArr.some(function(loc, index) {
        if (ataca(strArr, loc[1], loc[3])) {
            primera = index;
            return true;
        }
    });

    if (matches) {
        return strArr[primera];
    }
    return 'true';

    function ataca(strArr, x, y) {
        return strArr.some(function(loc){
            let coords = loc.substr(1, loc.length-2).split(',');

            if (coords[0] === x && coords[1] === y) {
                return false;
            }
            if (coords[0] === x) {
                return true;
            }
            if (coords[1] === y) {
                return true;
            }
            if (Math.abs(coords[0] - x) === Math.abs(coords[1] - y)) {
                return true;
            }
            return false;
        });
    
    }
         
}
// keep this function call here 
EightQueens(readline());