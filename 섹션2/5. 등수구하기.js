// 이중 for문을 이용하여 등수를 구해야 한다.
// 1. 자신보다 큰 수가 몇 개인지를 구한다.
// 2. 자신보다 큰 수가 몇 개인지를 구한 수를 등수로 한다.
function solution(arr) {
  const answer = Array.from({ length: arr.length }, () => 1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.log(solution(arr));
