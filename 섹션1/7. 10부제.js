function solution(day, arr) {
  let count = 0;
  for (el of arr) {
    if (el % 10 === day) count++;
  }
  return count;
}

arr = [25, 23, 11, 47, 53, 17, 33];
arr2 = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(3, arr));
console.log(solution(0, arr2));
