// 9개의 배열원소 중 합이 100이 되는 원소 7개를 구하여야 한다.
// 반복문으로 2가지를 뽑아서 제외 후에 합을 구해야 한다.
// 9명의 총합을 구한 뒤 이중 for문의 원소 i,j를 합하여 총합에서 빼기할 시, 100이 될 때 정답
function solution(arr) {
  let answer = arr; // 얕은 복사
  let sum = arr.reduce((a, b) => a + b, 0);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }
  return answer;
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));
