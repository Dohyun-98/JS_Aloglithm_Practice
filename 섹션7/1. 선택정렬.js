function solution(arr) {
  let answer = arr;

  for (let i = 0; i < answer.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < answer.length; j++) {
      if (answer[j] < answer[idx]) idx = j;
    }
    //최신문법
    [arr[i], arr[idx]] = [arr[idx], arr[i]];
    // let temp = answer[i];
    // answer[i] = answer[idx];
    // answer[idx] = temp;
  }

  return answer;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr));
