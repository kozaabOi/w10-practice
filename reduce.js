const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, num) => total + num, 0);
/* 
no initial value
1. return 1 + 2 (=== 3)
2. return 3 + 3 (=== 6)
3. return 6 + 4 (=== 10)
4. return 10 + 5 (=== 15)


with initial value
1. return 0 + 1 (=== 1)
2. return 1 + 2 (=== 3)
3. return 3 + 3 (=== 6)
4. return 6 + 4 (=== 10)
5. return 10 + 5 (=== 15)
*/

//console.log(sum)

let result = numbers[0]
for (let i = 1; i < numbers.length; i++) {
  result += numbers[i]  
}
console.log(result)