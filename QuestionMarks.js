function QuestionsMarks(str) {
    let num = [];
    //presumption of false, until flag is turned true
    let flag = false;
  
      //get an array of places in string holding integers
    for (let i = 0, len = str.length; i < len; i++) {
      if (/\d/.test(str[i])) {
        num.push(i);
      }
    }
  
    let numcont = num.length;
  
    for (let i = 0; i < numcont - 1; i++) {
      if (parseInt(str[num[i]], 10) + parseInt(str[num[i + 1]], 10) === 10) {
        flag = true;
        let strSeg = str.slice(num[i], num[i + 1]);
  
        strSeg = strSeg.replace(/[^\?]/g, '');
        if (strSeg !== '???') {
          return false;
        }
      }
    }
    return flag;
  }
     
  // keep this function call here 
  QuestionsMarks(readline());