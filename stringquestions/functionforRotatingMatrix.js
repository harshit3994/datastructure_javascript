var rotateMatrix = function(mat, N) {
  for (var x = 0; x < N / 2; x++) {
    // Consider elements in group of 4 in
    // current square
    for (var y = x; y < N - x - 1; y++) {
      // store current cell in temp variable
      var temp = mat[x][y];

      // move values from right to top
      mat[x][y] = mat[y][N - 1 - x];

      // move values from bottom to right
      mat[y][N - 1 - x] = mat[N - 1 - x][N - 1 - y];

      // move values from left to bottom
      mat[N - 1 - x][N - 1 - y] = mat[N - 1 - y][x];

      // assign temp to left
      mat[N - 1 - y][x] = temp;
    }
  }
};

/* TEST */
var testMatrix = [[1, 2, 3, 4], [0, 1, 2, 3], [0, 0, 1, 2], [1, 0, 0, 1]];

console.log("before:");
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);

rotateMatrix(testMatrix, 4);

console.log("after:");
console.log(testMatrix[0]);
console.log(testMatrix[1]);
console.log(testMatrix[2]);
console.log(testMatrix[3]);
