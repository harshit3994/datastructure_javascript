// Given an encoded string where repetitions of substrings are represented as substring followed by count of substrings.
// For example, if encrypted string is “ab2cd2” and k=4 ,
// so output will be ‘b’ because decrypted string is “ababcdcd” and 4th character is ‘b’.

function reverseIndividualString(string) {
  var finaloutput = "";
  var split = string.split(" ");
  for (var i = 0; i < split.length; i++) {
    let s = split[i];
    let revstring = reverse(s);

    finaloutput = finaloutput + " " + revstring;
  }

  return finaloutput;
}

function reverse(s) {
  return s
    .split("")
    .reverse()
    .join("");
}

var output = reverseIndividualString("Geeks for Geeks");

console.log(output);
