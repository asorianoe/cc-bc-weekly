function ensureQuestion(s) {
  if (s.endsWith("?")){
    return s;
  }
  return s+"?";
}

function reverseWords(str){
  let x = str.split(' ');
  x = x.reverse();
  
  return x.join(' '); 
}

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}


function oddOrEven(array) {
   let num = array.reduce((x, y) => x + y, 0);
   return num%2==0?'even':'odd';
}