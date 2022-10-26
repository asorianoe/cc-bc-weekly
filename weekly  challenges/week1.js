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


