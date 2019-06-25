function LetterCapitalize(str) {
    
    // code goes here
    var aux="";
    str.split(" ").forEach(function(p){
        aux += p.charAt(0).toUpperCase();
        if(p.length !== 1)
          aux += p.substring(1,p.length);
        aux += " ";
          
      });  
      return aux; 
  }
     
  // keep this function call here 
  LetterCapitalize(readline());