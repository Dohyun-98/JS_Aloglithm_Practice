function solution(maps) {
  var answer = 1;
  let n = maps.length;
  let m = maps[0].length;
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let queue = [];

  queue.push([0, 0]);
  maps[0][0] = 0;

  while (queue.length > 0) {
    let v = queue.length;

    for (let i = 0; i < v; i++) {
      const [x, y] = queue.shift();

      for (let j = 0; j < dx.length; j++) {
        const nx = x + dx[j];
        const ny = y + dy[j];

        if (nx >= 0 && ny >= 0 && nx < n && ny < m && maps[nx][ny] === 1) {
          if (nx === n - 1 && ny === m - 1) {
            return ++answer;
          }

          maps[nx][ny] = 0;
          queue.push([nx, ny]);
        }
      }
    }
    answer++;
  }

  return -1;
}

function solution(maps) {
  let answer = 1;
  let visited = maps;
  let queue = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const n = maps.length;
  const m = maps[0].length;

  queue.push([0, 0]);
  visited[0][0] = 0;

  while (queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && visited[nx][ny] === 1) {
          if (nx == n - 1 && ny == m - 1) {
            return ++answer;
          }
          queue.push([nx, ny]);
          visited[nx][ny] = 0;
        }
      }
    }
    answer++;
  }

  return -1;
}
