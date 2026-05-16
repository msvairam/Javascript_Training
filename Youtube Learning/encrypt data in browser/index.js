const empty  =  new Uint8Array() // [0000]
const initialized  = new Uint8Array([200,150,20]); //[200, 150, 20]

console.log(new TextEncoder().encode('ABC')); // [65, 66, 67]

/* Encyrption Algorithms
     >> Confidentiality
     >> Integrity
     >> Authenticity
*/

// AES-CTR, AES-CBC, AES-GCM

// AES-CTR, AES-CBC ->  If we pass wrong input value in particular part while decrypt, than show error in that part of value.
// AES-GCM -> If we pass wrong input value while decrypt. than return error in overall value. -> BEST Encrpt Approach.

//https://github.com/ad1992/web-crypto-apis



