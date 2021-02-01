//Task #3
//Array of 1000 number which may repeat

const arr = [1, 0, 10,  '0', '1', '', NaN, false, null, 'false', 'true'];

const res = arr.filter(Boolean);

console.log(`Truthy values of array (arr) is - ${res}`);
