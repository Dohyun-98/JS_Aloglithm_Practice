// 이진 트리 노드
// 자식 노드를 2개 가지고 있는 노드

// 좌측 자식 = 부모노드 * 2
// 우측 자식 = 부모노드 * 2 + 1

// 깊이 우선 탐색 (DFS)
// 1. 좌측으로 파고 들어간다
// 2. 파고 들다가 막힐 경우 되돌아온다.
// 3. 우측을 탐색한다.

// 1,2,3 번을 반복한다.

// 전위 순회
// 부모 -> 좌측 -> 우측
// 중위 순회
// 좌측 -> 부모 -> 우측
// 후위 순회
// 좌측 -> 우측 -> 부모

function solution(v) {
  let answer;

  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2);
      console.log(v);
      DFS(v * 2 + 1);
    }
  }
  DFS(1);

  return answer;
}

console.log(solution(1));
