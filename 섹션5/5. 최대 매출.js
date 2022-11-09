function solution(k, arr) {
  let answer = 0;
  //   let lt = 0;
  //   let sum = 0;
  //   let count = 0;
  //   for (let rt = 0; rt < arr.length; rt++) {
  //     if (count >= k) {
  //       count--;
  //       sum -= arr[lt++];
  //     }
  //     if (count < k) {
  //       count++;
  //       sum += arr[rt];
  //       if (count === k) {
  //         answer = Math.max(sum, answer);
  //       }
  //     }
  //   }

  let sum = 0;
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));
