function KaprekarsConstant(num) {
    const KAP = 6174;
    var count = 0;
    while (true) {
        var num = ev(num)
        if (num === true) {
            return count;
        }
    }

    function ev(num) {
        count++
        
        var arrAsc = num.toString().split('').sort();
        var arrDesc = arrAsc.slice(0).reverse();
        var numP = parseInt(arrAsc.join(''), 10);
        var numG = parseInt(arrDesc.join(''), 10);
        while (numG < 1000) {
            numG = numG * 10;
        }
        return numG - numP === KAP ? true : numG - numP;
    }
}