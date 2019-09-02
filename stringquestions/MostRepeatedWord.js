function findMostRepeatedWord(str) {
  var res = str.split(" ");
  //console.log(res);
  var freq = {};
  for (var i = 0; i < res.length; i++) {
    if (freq[res[i]]) {
      freq[res[i]] = freq[res[i]] + 1;
    } else {
      freq[res[i]] = 1;
    }
  }
  var max = 0;
  for (var c in freq) {
    max = Math.max(max, freq[c]);
  }

  return max;
}

var maxword = findMostRepeatedWord("find the the find find");

console.log(maxword);
