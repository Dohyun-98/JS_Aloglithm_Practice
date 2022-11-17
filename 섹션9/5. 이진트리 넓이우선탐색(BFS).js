function solution() {
  let answer = "";
  let queue = [];
  // 루트노드
  queue.push(1);
  // 큐의 길이가 0이 될 때 까지 반복
  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
}

console.log(solution());
