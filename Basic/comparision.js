console.log("2" > 1);
console.log("02" > 1)

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)

//*************Note********************
/* 
The Reason is that an equality check == and comparsion >  < >= <= work differently.
Comparsions convert null to a number, treating it as 0.
That's why (3) null >=0 is true and (1) null > 0 is false.
*/

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

// === is used for strict check it checks data type as well

console.log("2" === 2)

