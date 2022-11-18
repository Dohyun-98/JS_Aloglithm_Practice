function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let dis = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  dis[s] = 0;
  //큐의 길이가 0일 때 정지
  while (queue.length) {
    // 큐에서 방문한 노드를 꺼낸다.
    let x = queue.shift();
    // 다음 방문 지점 검사
    for (let nx of [x - 1, x + 1, x + 5]) {
      // 다음 방문 지점이 종료지점과 같을 때 dis 배열에 저장된 레벨값을 리턴
      if (nx === e) return dis[x] + 1;
      // nx가 유효범위 이며, 방문하지 않았을 경우
      if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
        // 방문 표시
        ch[nx] = 1;
        // 큐에 삽입
        queue.push(nx);
        // 레벨 입력
        dis[nx] = dis[x] + 1;
      }
    }
  }
  return answer;
}

console.log(solution(8, 3));

function solution(s, e) {
  let answer = 0;
  let ch = Array.from({ length: 10001 }, () => 0);
  let queue = [];
  queue.push(s);
  ch[s] = 1;
  let L = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      for (let nx of [x - 1, x + 1, x + 5]) {
        if (nx === e) return L + 1;
        if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
          ch[nx] = 1;
          queue.push(nx);
        }
      }
    }
    L++;
  }
  return answer;
}

console.log(solution(5, 14));
