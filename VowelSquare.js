function VowelSquare(strArr) { 

    for (let ren = 0; ren < strArr.length-1; ren++) {
        for (let col = 0; col < strArr[0].length-1; col++) {
            if (esVowel2x2(strArr, ren, col)) {
                return ren + '-' + col;
            }
        }
    }
    return 'no encontrado';
         
         
    function esVowel2x2(strArr, ren, col) {
        
        if (!esVowel(strArr[ren][col])) return false;
        if (!esVowel(strArr[ren+1][col])) return false;
        if (!esVowel(strArr[ren][col+1])) return false;
        if (!esVowel(strArr[ren+1][col+1])) return false;
        return true;
    }
    
    function esVowel(letter) {
        const VOWELS = 'aeiou';
        return VOWELS.includes(letter);
    }
}
   
// keep this function call here 
VowelSquare(readline());