function ChessboardTraveling(str) { 
  // code goes here  
  var x = str[1], y = str[3],
      a = str[6], b = str[8];
  var difX = a - x, difY = b - y;
  
  return recur(difX, difY);
  
  function recur(difX, difY) {
    if (difY === 0) { return 1; }
    if (difX === 0) { return 1; }
    
    return recur(difX - 1, difY) + recur(difX, difY - 1)
  } 
         
}

// keep this function call here 
ChessboardTraveling(readline());   