function solution(arr1, arr2) {
  // sort는 n log n의 시간복잡도를 가진다.
  // const answer = [...arr1, ...arr2].sort((a, b) => a - b);
  // [투포인터 알고리즘]
  // 두개의 포인터를 가지고 for문 한개 안에서 정답을 찾을 수 있다.
  const answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = 0;
  let p2 = 0;
  while (p1 < n && p2 < m) {
    if (arr1[p1] < arr2[p2]) {
      answer.push(arr1[p1++]);
    } else {
      answer.push(arr2[p2++]);
    }
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);

  return answer;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));
