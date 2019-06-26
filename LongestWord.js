function LongestWord(sen) {

    sen = sen.replace(/[^a-zA-Zsd]/g, ' ');
    var arr = sen.split(' ');
    arr.sort(function(a, b) {return b.length - a.length});
    return arr[0];  
  }
  console.log(LongestWord("flores verde"));