 function digital_root(n) {
  var s = n.toString();
  var sum = 0;
  for ( var i = 0; i < s.length; i++ ) {
    sum = sum + parseInt(s.charAt(i));
    console.log( sum )
  }
  if ( parseInt(sum) <= 9 ) {
    console.log( sum )
    return sum;
   } else {
     return digital_root(parseInt(sum));
   }
}

console.log( digital_root(154433) )