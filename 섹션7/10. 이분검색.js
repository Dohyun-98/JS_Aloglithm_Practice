function solution(target, arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let st = 0;
  let ed = arr.length - 1;
  let mid;
  while (st <= ed) {
    mid = Math.floor((ed + st) / 2);
    if (arr[mid] === target) {
      return mid + 1;
    } else if (arr[mid] < target) {
      st = mid + 1;
    } else {
      ed = mid - 1;
    }
  }
  return -1;
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));
