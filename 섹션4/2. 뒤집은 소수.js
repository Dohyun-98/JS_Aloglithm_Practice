function solution(num) {
  let answer = [];
  for (let i = 0; i < num.length; i++) {
    let numel = Number(String(num[i]).split("").reverse().join(""));
    let count = 0;
    for (let j = 0; j < numel; j++) {
      if (numel % j == 0) {
        count++;
      }
    }
    if (count === 1) {
      answer.push(numel);
    }
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

// 소수 판별 함수
function isPrime(num) {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function solution2(num) {
  let answer = [];
  for (let x of num) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr2 = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution2(arr));
