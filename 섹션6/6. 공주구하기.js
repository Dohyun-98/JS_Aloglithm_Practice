function solution(n, k) {
  let answer;
  let count = 0;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length !== 1) {
    count++;
    if (count === 3) {
      queue.shift();
      count = 0;
    } else {
      queue.push(queue.shift());
    }
  }
  answer = queue[0];
  return answer;
}
console.log(solution(8, 3));
