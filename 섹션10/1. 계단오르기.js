/** DP solution
 * [동적 계획법]
 * - 문제를 작은 단위로 쪼개어 큰 문제를 해결하는 방법
 * - dy[n] = dy[n]+? ==> 점화식 관계를 파악한다.
 * - 즉 작은 문제로 점화식을 찾아내는 문제이다.
 */
function solution(n) {
  let answer = 0;
  const dy = Array.from({ length: n + 1 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }
  answer = dy[n];
  return answer;
}

console.log(solution(7));
