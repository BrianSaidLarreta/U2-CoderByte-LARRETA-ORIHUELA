function AlphabetSoup(str) { 

    // code goes here  
    var aux = str.split("");
    var aux2 = aux.sort();
    aux ="";
    aux2.forEach(function(l){
       aux += l;    
    });
    return aux; 
           
  }
     
  // keep this function call here 
  AlphabetSoup(readline());