function drawBook(n, p) {
  let result1, result2;
  const back_pages = (n/2) - (p/2) // 6/2-4/2=3-2=1
  
  result1 = Math.floor(p/2); // /1 2/3 4/5 6/   ===1 ===2
  
  if (n%2 == 0 && p%2 != 0) {
    result2 = Math.floor(back_pages +1); 
  } else {
    result2 = Math.floor(back_pages);
  }
  
  return Math.min(result1, result2);
};

// console.log(drawBook(18, 13)); //18/19 16/17 14/15 12/13 10/11 8/9 6/7 4/5 2/3 1/
// console.log(drawBook(19, 13));
// console.log(drawBook(8, 4));
// console.log(drawBook(7, 4));
// console.log(drawBook(1, 1));
// console.log(drawBook(6, 1));
// console.log(drawBook(6, 3));
console.log(drawBook(6, 2));
// console.log(drawBook(4, 4));
console.log(drawBook(6, 4));  //2  1
// console.log(drawBook(6, 5));
// console.log(drawBook(5, 4));
// console.log(drawBook(5, 3));
// console.log(drawBook(5, 2));
// console.log(drawBook(5, 1));
