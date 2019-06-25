function MaximalSquare(matrix) {
    
    var converted = matrix.map(rowArr => rowArr.join('')).join('');
    
    return converted.indexOf('0') === -1;
}

function scan(matrix, windowSize) {
    for (var i = 0; i <= matrix.length - tam; i++) {
        for (var j = 0; j <= matrix[0].length - tam; j++) {
            var subMatrix = matrix.slice(i, i + tam).map(rowArr => rowArr.slice(j, j + tam));
            if (allOnes(subMatrix)) return true;
        }
    }
    return false;
}

function MaximalSquare(strArr) { 
    var matrix = strArr.map(line => line.split(''));

    for (tam = matrix.length; tam > 0; tam--) {
        if (scan(matrix, tam)) {
            return tam * windowSize;
        }
    }
}
   
// keep this function call here 
MaximalSquare(readline());