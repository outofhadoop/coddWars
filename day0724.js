/**
 * Usually when you buy something, you're asked whether your credit card number,
 *  phone number or answer to your most secret question is still correct. However,
 *  since someone could look over your shoulder,
 *  you don't want that shown on your screen.
 *  Instead, we mask it.
 * Your task is to write a function maskify,
 *  which changes all but the last four characters into '#'.
 */
 
 // return masked string
function maskify(cc) {
  var c = cc.toString();
  if ( c.length <=4 ) {
  	return c;
  } else {
  	for (var i = 0; i <= c.length - 4; i--) {
  		c.splice(i, 1);
  		console.log(c)
  	}
  	return c;
  }
}

console.log(maskify('111111111'));