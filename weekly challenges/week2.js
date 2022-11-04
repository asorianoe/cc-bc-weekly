function isPalindrome(line) {
  let str = ''+line;
  let reverse = str.split('').reverse().join('');
  return reverse==str;
}


function well(x){
 let cnt = x.reduce((prev,val)=>val=='good'?prev+1:prev,0);
 return (cnt==0)?'Fail!': (cnt>2?'I smell a series!':'Publish!');
}
