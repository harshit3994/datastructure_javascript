function findInitialsofName(string) {
  var splitarr = string.split(" ");
  var newarr = [];
  for (var i = 0; i < splitarr.length; i++) {
    newarr.push(splitarr[i][0]);
  }

  return newarr.join("");
}

var output = findInitialsofName("Harshit Narang");

console.log(output);
