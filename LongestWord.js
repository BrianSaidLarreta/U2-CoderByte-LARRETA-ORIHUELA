function LongestWord(sen) { 

    // code goes here  
    var subs = sen.match(/[a-z0-9]+/gi);
    var aux="";
    subs.forEach(function(sub){
        if (sub.length > aux.length){
             aux = sub;
         }else if(sub.length === aux.length){
             aux = aux;
         };
    });
    
    return aux; 
           
  }
     
  // keep this function call here 
  LongestWord(readline());
   